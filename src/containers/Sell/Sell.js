import React, { Component } from "react";
import { connect } from "react-redux";

import axios from "../../axios-orders";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
//import { updateObject, checkValidity } from "../../shared/utillity";

import classes from "./Sell.css";

class Sell extends Component {
  state = {
    controls: {
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
      image: {
        elementType: "input",
        elementConfig: {
          type: "file",
          placeholder: "",
        },
        value: "",
        label: "PHOTO",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
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
    },
    image: "https://i.ibb.co/HBVnDZm/Mask.png",
    favorite: false,
  };

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true,
      },
    };
    this.setState({ controls: updatedControls });
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  };

  submitHandler = (event) => {
    event.preventDefault();
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
      this.props.history.push("/");
    } else {
      this.props.history.push("/auth/login");
    }
  };

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
        label={formElement.config.label}
        changed={(event) => this.inputChangedHandler(event, formElement.id)}
      />
    ));
    return (
      <div className={classes.Sell}>
        <h3>Add product</h3>
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
