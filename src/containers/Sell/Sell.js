import React, { useState } from "react";
import { connect } from "react-redux";
//import axois from "axios";
// import * as firebase from "firebase";
import firebase from "../../firebase";

//import axios from "../../axios-orders";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import * as actions from "../../store/actions/index";
import { updateObject, checkValidity } from "../../shared/utillity";
import classes from "./Sell.css";

import Upload from "../../components/uploadImage/uploadImage";

// let firebaseConfig = {
//   apiKey: "AIzaSyADCx6rRTqPDTNi5H2rcFcBPzcb3u4QSBk",
//   authDomain: "marketplace-91001.firebaseapp.com",
//   databaseURL: "https://marketplace-91001.firebaseio.com",
//   projectId: "marketplace-91001",
//   storageBucket: "marketplace-91001.appspot.com",
//   messagingSenderId: "561618160981",
//   appId: "1:561618160981:web:36105beef96ec8614233dc",
//   measurementId: "G-4LJCGWNGKS",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// //firebase.analytics();

const sell = (props) => {
  const [orderForm, setOrderForm] = useState({
    title: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "For example: Iron man suit",
      },
      value: "",
      label: "TITLE",
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    location: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "For example: Los Angeles, CA",
      },
      value: "",
      label: "LOCATION",
      validation: {
        required: true,
        minLength: 6,
      },
      valid: false,
      touched: false,
    },
    description: {
      elementType: "textarea",
      elementConfig: {
        type: "text",
        placeholder: "For example: Iron man suit",
      },
      value: "",
      label: "DESCRIPTION",
      validation: {
        required: true,
        minLength: 6,
      },
      valid: false,
      touched: false,
    },
    // image: {
    //   elementType: "input",
    //   elementConfig: {
    //     type: "file",
    //     placeholder: "",
    //   },
    //   valueFile: "",
    //   label: "PHOTO",
    //   validation: {
    //     required: true,
    //     minLength: 6,
    //   },
    //   valid: false,
    //   touched: false,
    // },
    price: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "For example: 198.5",
      },
      value: "",
      label: "PRICE",
      validation: {
        required: true,
        //minLength: 6
      },
      valid: false,
      touched: false,
    },
    // image: "https://i.ibb.co/HBVnDZm/Mask.png",
    // favorite: false,
  });

  const [selectedFile, setSelectedFile] = useState(null);

  //const [formIsValid, setFormIsValid] = useState(false);
  // const [selectedFile, setSelectedFile] = useState(null);
  // let timePost = new Date();
  // timePost.setDate(timePost.getDate() - 1);
  // console.log(timePost);
  // timePost.setHours(15, 35);
  // console.log(timePost);

  const submitHandler = (event) => {
    event.preventDefault();

    // const formData = {
    //   //img: "https://i.ibb.co/HBVnDZm/Mask.png",
    //   favorite: false,
    //   time: new Date(),
    // };
    // for (let formElementIdentifier in orderForm) {
    //   formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
    // }

    let downloadURL;
    let storageRef = firebase.storage().ref("products/" + selectedFile.name);
    let task = storageRef.put(selectedFile);

    task.on(
      "state_changed",
      null,
      null,
      function () {
        task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log("File available at", downloadURL);
          let image = downloadURL;
          console.log("image", image);

          const formData = {
            //img: "https://i.ibb.co/HBVnDZm/Mask.png",
            image: image,
            favorite: false,
            time: new Date(),
          };

          for (let formElementIdentifier in orderForm) {
            formData[formElementIdentifier] =
              orderForm[formElementIdentifier].value;
          }

          console.log("formData", formData);

          let product = {
            productData: formData,
            userId: props.userId,
          };
          console.log("product", product);
          firebase
            .database()
            .ref(`product`)
            // .child("productData")
            .push(product);
        });
      }
      // function progress(snapshot) {
      //   let prercentage =
      //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //   // uploader.value = prercentage;
      // },
      // function error(err) {},

      // function complete() {}
    );

    // const product = {
    //   productData: formData,
    //   userId: props.userId,
    // };

    //props.onSellProduct(product, props.token);
    if (props.isAuthenticated) {
      props.history.push("/");
    } else {
      props.history.push("/auth/login");
    }
  };

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(orderForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        orderForm[inputIdentifier].validation
      ),
      touched: true,
    });
    const updatedOrderForm = updateObject(orderForm, {
      [inputIdentifier]: updatedFormElement,
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    setOrderForm(updatedOrderForm);
    //setFormIsValid(formIsValid);
  };

  const fileChangedHandler = (event) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
    console.log("fileChangedHandler", selectedFile);
  };

  const formElementsArray = [];
  for (let key in orderForm) {
    formElementsArray.push({
      id: key,
      config: orderForm[key],
    });
  }

  // submitHandler = (event) => {
  //   event.preventDefault();
  //   const data = {
  //     title: this.state.controls.title.value,
  //     location: this.state.controls.location.value,
  //     description: this.state.controls.description.value,
  //     image: this.state.image,
  //     author: this.state.author,
  //     price: this.state.controls.price.value,
  //     favorite: this.state.favorite,
  //   };
  //   axios.post("/product.json", data).then((response) => {
  //     console.log(response);
  //   });
  //   if (this.props.isAuthenticated) {
  //     this.props.history.push("/");
  //   } else {
  //     this.props.history.push("/auth/login");
  //   }
  // };
  //const formElmentsArray = [];

  // for (let key in this.state.controls) {
  //   formElmentsArray.push({
  //     id: key,
  //     config: this.state.controls[key],
  //   });
  // }

  let form = formElementsArray.map((formElement) => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      tuched={formElement.config.tuched}
      label={formElement.config.label}
      changed={(event) => inputChangedHandler(event, formElement.id)}
    />
  ));
  // console.log(selectedFile);
  // const fileSelectedHandler = (event) => {
  //   setSelectedFile({ selectedFile: event.target.files[0] });
  // };

  // const fileUploadHandler = () => {
  //   const fd = new FormData();
  //   fd.append("image", selectedFile);
  //   axois
  //     .post(
  //       "https://us-central1-marketplace-91001.cloudfunctions.net/uploadFile",
  //       fd
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     });
  // };

  return (
    <div className={classes.Sell}>
      <h3>Add product</h3>

      {/* <input type="file" onChange={fileSelectedHandler} />
      <button onClick={fileUploadHandler}>Upload</button> */}
      <Upload />

      <form onSubmit={submitHandler}>
        {form}
        <input type="file" onChange={(event) => fileChangedHandler(event)} />

        <Button btnType="Success">
          {props.isAuthenticated ? "SUBMIT" : "SIGN UP TO SUBMIT"}
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    loading: state.sell.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSellProduct: (productData, token) =>
      dispatch(actions.sellProduct(productData, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(sell);
