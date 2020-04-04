import React, { Component } from "react";
import { connect } from "react-redux";

import axios from "../../axios-orders";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import { updateObject, checkValidity } from "../../shared/utillity";

import classes from "./Sell.css";

class Sell extends Component {
  state = {
    controls: {
      title: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Mail Address",
        },
        value: "",
        validation: {
          required: true,
          //isEmail: true,
        },
        valid: false,
        touched: false,
      },
      location: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Location",
        },
        value: "",
        validation: {
          required: true,
          //minLength: 6
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
        validation: {
          required: true,
          //minLength: 6
        },
        valid: false,
        touched: false,
      },
      image: {
        elementType: "input",
        elementConfig: {
          type: "file",
          placeholder: "",
        },
        value: "",
        validation: {
          required: true,
          //minLength: 6
        },
        valid: false,
        touched: false,
      },
      price: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Price",
        },
        value: "",
        validation: {
          required: true,
          //minLength: 6
        },
        valid: false,
        touched: false,
      },
    },
    // title: "",
    // location: "",
    // description: "",
    image: "https://i.ibb.co/HBVnDZm/Mask.png",
    // author: "Max",
    // price: "",
    favorite: false,
  };

  inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(this.state.controls, {
      [controlName]: updateObject(this.state.controls[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true,
      }),
    });

    this.setState({ controls: updatedControls });
  };

  submitHandler = (event) => {
    event.preventDefault();
    // this.props.onAuth(
    //   this.state.controls.email.value,
    //   this.state.controls.password.value,
    //   this.state.isSignup
    // );
    const data = {
      title: this.state.controls.title.value,
      location: this.state.controls.location.value,
      description: this.state.controls.description.value,
      image: this.state.image,
      author: this.state.author,
      price: this.state.controls.price.value,
      favorite: this.state.favorite,
    };
    axios.post("/product.json", data).then((response) => {
      console.log(response);
    });
    if (this.props.isAuthenticated) {
      this.props.history.push("/sell");
    } else {
      this.props.history.push("/auth/login");
    }
  };

  // postDataHandler = () => {
  //   const data = {
  //     title: this.state.title,
  //     location: this.state.location,
  //     description: this.state.description,
  //     image: this.state.image,
  //     author: this.state.author,
  //     price: this.state.price,
  //     favorite: this.state.favorite
  //   };
  //   axios.post("/product.json", data).then((response) => {
  //     console.log(response);
  //   });
  // };

  render() {
    const formElmentsArray = [];

    for (let key in this.state.controls) {
      formElmentsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }

    let form = formElmentsArray.map((formElement) => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        tuched={formElement.config.tuched}
        changed={(event) => this.inputChangedHandler(event, formElement.id)}
      />
    ));
    return (
      <div className={classes.Sell}>
        <h2>Add product</h2>
        <form onSubmit={this.submitHandler}>
          {form}
          <Button btnType="Success">
            {this.props.isAuthenticated ? "SUBMIT" : "SIGN UP TO SUBMIT"}
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Sell);
