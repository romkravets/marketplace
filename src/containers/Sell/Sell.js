import React, { Component } from "react";
import axios from "../../axios-orders";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import { updateObject, checkValidity } from "../../shared/utillity";

class Sell extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Mail Address"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    },
    title: "",
    location: "",
    description: "",
    image: "https://i.ibb.co/HBVnDZm/Mask.png",
    author: "Max",
    price: "",
    favorite: false
  };

  inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(this.state.controls, {
      [controlName]: updateObject(this.state.controls[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true
      })
    });

    this.setState({ controls: updatedControls });
  };

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      location: this.state.location,
      description: this.state.description,
      image: this.state.image,
      author: this.state.author,
      price: this.state.price,
      favorite: this.state.favorite
    };
    axios.post("/product.json", data).then((response) => {
      console.log(response);
    });
  };

  render() {
    const formElmentsArray = [];

    for (let key in this.state.controls) {
      formElmentsArray.push({
        id: key,
        config: this.state.controls[key]
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
      <div className="NewPost">
        <h2>Add product</h2>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Location</label>
        <input
          type="text"
          value={this.state.location}
          onChange={(event) => this.setState({ location: event.target.value })}
        />
        <label>Description</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) =>
            this.setState({ description: event.target.value })
          }
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <label>Price</label>
        <input
          type="text"
          value={this.state.price}
          onChange={(event) => this.setState({ price: event.target.value })}
        />
        <Button btnType="Success" onClick={this.postDataHandler}>
          SUBMIT
        </Button>

        <form>{form}</form>
      </div>
    );
  }
}

export default Sell;
