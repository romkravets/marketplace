import React, { Component } from "react";
import axios from "axios";

import * as firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyADCx6rRTqPDTNi5H2rcFcBPzcb3u4QSBk",
  authDomain: "marketplace-91001.firebaseapp.com",
  databaseURL: "https://marketplace-91001.firebaseio.com",
  projectId: "marketplace-91001",
  storageBucket: "marketplace-91001.appspot.com",
  messagingSenderId: "561618160981",
  appId: "1:561618160981:web:36105beef96ec8614233dc",
  measurementId: "G-4LJCGWNGKS",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

class Upload extends Component {
  state = { selectedFile: null };

  fileChangedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  uploadHandler = () => {
    // const formData = new FormData();
    // formData.append(
    //   "myFile",
    //   this.state.selectedFile,
    //   this.state.selectedFile.name
    // );

    let storageRef = firebase
      .storage()
      .ref("products/" + this.state.selectedFile.name);
    console.log(this.state.selectedFile.name);
    let task = storageRef.put(this.state.selectedFile);
    console.log(this.state.selectedFile);

    task.on(
      "state_changed",
      function progress(snapshot) {
        let prercentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // uploader.value = prercentage;
      },
      function error(err) {},

      function complete() {}
    );
    // axios
    //   .post(
    //     "https://us-central1-marketplace-91001.cloudfunctions.net/uploadFile",
    //     formData,
    //     {
    //       onUploadProgress: (progressEvent) => {
    //         console.log(
    //           Math.round((progressEvent.loaded / progressEvent.total) * 100) +
    //             "%"
    //         );
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   });
  };

  render() {
    return (
      <div>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={this.fileChangedHandler}
          ref={(fileInpit) => (this.fileInpit = fileInpit)}
        />
        <button onClick={() => this.fileInpit.click()}>Pick File</button>
        <button onClick={this.uploadHandler}>Upload!</button>
      </div>
    );
  }
}

export default Upload;
