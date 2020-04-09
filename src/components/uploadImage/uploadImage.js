import React, { Component } from "react";
import axios from "axios";

class Upload extends Component {
  state = { selectedFile: null };

  fileChangedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  uploadHandler = () => {
    const formData = new FormData();
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    // let storageRef = firebase
    //   .storage()
    //   .ref("products/" + this.state.selectedFile.name);
    // console.log(this.state.selectedFile.name);
    // let task = storageRef.put(this.state.selectedFile);
    // console.log(this.state.selectedFile);
    // task.on(
    //   "state_changed",
    //   function progress(snapshot) {
    //     let prercentage =
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     // uploader.value = prercentage;
    //   },
    //   function error(err) {},
    //   function complete() {}
    // );
    axios
      .post(
        "https://us-central1-marketplace-91001.cloudfunctions.net/uploadFile",
        formData,
        {
          onUploadProgress: (progressEvent) => {
            console.log(
              Math.round((progressEvent.loaded / progressEvent.total) * 100) +
                "%"
            );
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
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
