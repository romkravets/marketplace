// const functions = require("firebase-functions");
// const os = require("os");
// const path = require("path");
// const spawn = require("child-process-promise").spawn;
// const cors = require("cors")({ origin: true });
// const Busboy = require("busboy");
// const fs = require("fs");

// const gcconfig = {
//   projectId: "marketplace-91001",
//   keyFilename: "marketplace-91001-firebase-adminsdk-vvkln-5355e0ed13.json",
// };

// const { gcs } = require("@google-cloud/storage")(gcconfig);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.storage.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });

// exports.onFileChange = functions.storage.object().onFinalize((event) => {
//   const object = event.data;
//   const bucket = object.bucket;
//   const contentType = object.contentType;
//   const filePath = object.name;
//   console.log("File change detected, function execution started");
//   console.log(event);

//   if (object.resourceState === "not_exists") {
//     console.log("We deleted a file, exit...");
//     return;
//   }

//   if (path.basename(filePath).startsWith("resized-")) {
//     console.log("We already renamed that file!");
//     return;
//   }

//   const destBucket = gcs.bucket(bucket);
//   const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
//   const metadata = { contentType: contentType };
//   return destBucket
//     .file(filePath)
//     .download({
//       destination: tmpFilePath,
//     })
//     .then(() => {
//       return spawn("convert", [tmpFilePath, "-resize", "500x500", tmpFilePath]);
//     })
//     .then(() => {
//       return destBucket.upload(tmpFilePath, {
//         destination: "resized-" + path.basename(filePath),
//         metadata: metadata,
//       });
//     });
// });
// exports.uploadFile((req, res) => {
//   res.then(() => {
//     res.status(200).json({
//       message: "It worked!",
//     });
//   });
// });
// exports.uploadFile = functions.https.onRequest((req, res) => {
//   cors(req, res, () => {
//     if (req.method !== "POST") {
//       return res.status(500).json({
//         message: "Not allowed",
//       });
//     }
//     const busboy = new Busboy({ headers: req.headers });
//     let uploadData = null;

//     busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
//       const filepath = path.join(os.tmpdir(), filename);
//       uploadData = { file: filepath, type: mimetype };
//       file.pipe(fs.createWriteStream(filepath));
//     });

//     busboy.on("finish", () => {
//       const bucket = gcs.bucket("marketplace-91001.appspot.com");
//       bucket
//         .upload(uploadData.file, {
//           uploadType: "media",
//           metadata: {
//             metadata: {
//               contentType: uploadData.type,
//             },
//           },
//         })
//         .then(() => {
//           res.status(200).json({
//             message: "It worked!",
//           });
//         })
//         .catch((err) => {
//           res.status(500).json({
//             error: err,
//           });
//         });
//     });
//     busboy.end(req.rawBody);
//   });
// });

const functions = require("firebase-functions");
const os = require("os");
const path = require("path");
//const spawn = require("child-process-promise").spawn;
const cors = require("cors")({ origin: true });
const Busboy = require("busboy");
const fs = require("fs");

const { Storage } = require("@google-cloud/storage");
const projectId = "marketplace-9100";

const keyFilename = "marketplace-91001-firebase-adminsdk-vvkln-5355e0ed13.json";
let gcs = new Storage({
  projectId: projectId,
  keyFilename: keyFilename,
});

exports.uploadFile = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(500).json({
        message: "Not allowed!",
      });
    }
    const busboy = new Busboy({ headers: req.headers });
    let uploadData = null;

    busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
      const filepath = path.join(os.tmpdir(), filename);
      uploadData = { file: filepath, type: mimetype };
      file.pipe(fs.createWriteStream(filepath));
    });

    busboy.on("finish", () => {
      const bucket = gcs.bucket("marketplace-91001.appspot.com");
      return bucket
        .upload(uploadData.file, {
          uploadType: "media",
          metadata: {
            metadata: {
              contentType: uploadData.type,
            },
          },
        })
        .then(() => {
          return res.status(200).json({
            message: "it worked!",
          });
        })
        .catch((err) => {
          res.status(500).json({
            error: err,
          });
        });
    });
    busboy.end(req.rawBody);
  });
});
