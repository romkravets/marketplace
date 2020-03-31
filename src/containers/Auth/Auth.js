import React, { useState, useEffect } from "react";
//import { connect } from 'react-redux';
//import { Redirect } from 'react-router-dom';

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
//import Spinner from '../../components/UI/Spinner/Spinner';
import classes from "./Auth.css";
//import * as actions from '../../store/actions/index';
import Aux from "../../hoc/Auxiliary/Auxiliary";
import { updateObject, checkValidity } from "../../shared/utillity";

const auth = (props) => {
  const [authForm, setAuthForm] = useState({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Example@gmail.com"
      },
      value: "",
      validation: {
        required: true,
        isEmail: true
      },
      valid: false,
      touched: false
    },
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Tony Stark"
      },
      value: "",
      validation: {
        required: true
      },
      valid: false,
      tuched: false
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
  });
  const [isSignup, setIsSignup] = useState(true);

  //  const {buildingBurger, authRedirectPath, onSetAuthRedirectPath} = props;

  //  useEffect(() => {
  //      if ( !buildingBurger && authRedirectPath !== '/' ) {
  //          onSetAuthRedirectPath();
  //      }
  //  }, [buildingBurger, authRedirectPath, onSetAuthRedirectPath]);

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(authForm, {
      [controlName]: updateObject(authForm[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          authForm[controlName].validation
        ),
        touched: true
      })
    });
    setAuthForm(updatedControls);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAuth(authForm.email.value, authForm.password.value, isSignup);
  };

  const switchAuthModeHandler = () => {
    // this.setState( prevState => {
    //     return { isSignup: !prevState.isSignup };
    // } );
    setIsSignup(!isSignup);
  };

  const formElementsArray = [];
  for (let key in authForm) {
    formElementsArray.push({
      id: key,
      config: authForm[key]
    });
  }

  let form = formElementsArray.map((formElement) => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={(event) => inputChangedHandler(event, formElement.id)}
    />
  ));

  //   if ( props.loading ) {
  //       form = <Spinner />
  //   }

  //   let errorMessage = null;

  //   if ( props.error ) {
  //       errorMessage = (
  //           <p>{props.error.message}</p>
  //       );
  //   }

  //   let authRedirect = null;
  //   if ( props.isAuthenticated ) {
  //       authRedirect = <Redirect to={props.authRedirectPath} />
  //   }

  return (
    <div className={classes.Auth}>
      {/* {authRedirect} */}
      {/* {errorMessage} */}
      <h3>Register</h3>
      <form onSubmit={submitHandler}>
        {form}
        <Button btnType="Success">SUBMIT</Button>
      </form>
      <div className={classes.Account}>
        <p>I already have an account</p>
        <Button clicked={switchAuthModeHandler} btnType="Danger">
          {isSignup ? "LOG IN" : "REGISTER NOW"}
        </Button>
      </div>
    </div>
  );
};

// const mapStateToProps = state => {
//     return {
//         loading: state.auth.loading,
//         error: state.auth.error,
//         isAuthenticated: state.auth.token !== null,
//         buildingBurger: state.burgerBuilder.building,
//         authRedirectPath: state.auth.authRedirectPath
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         onAuth: ( email, password, isSignup ) => dispatch( actions.auth( email, password, isSignup ) ),
//         onSetAuthRedirectPath: () => dispatch( actions.setAuthRedirectPath( '/' ) )
//     };
// };

export default auth;
