const functions = require("firebase-functions");
const os = require("os");
const path = require("path");
//const spawn = require("child-process-promise").spawn;
const cors = require("cors")({ origin: true });
const Busboy = require("busboy");
const fs = require("fs");

const gcconfig = {
  projectId: "fmarketplace-91001",
  keyFilename: "marketplace-91001-firebase-adminsdk-vvkln-de6177fa91.json",
};

const gcs = require("@google-cloud/storage")(gcconfig);

exports.uploadFile = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(501).json({
        message: "Not allowed",
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
      bucket
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
            message: "It worked!",
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

exports.onDataAdded = functions.database
  .ref("/product/{id}")
  .onCreate((event) => {
    const data = event.data.val();
    const newData = {
      msg: data.msg.toUpperCase(),
      //img: "https://firebasestorage.googleapis.com/v0/b/marketplace-91001.appspot.com/o/mask.png?alt=media&token=d43743f1-35af-45e5-ba65-75b8ca754308";
    };
    return event.data.ref.parent.child("productData").set(newData);
  });
