import React from "react";
import { useDispatch } from "react-redux";
import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { setUser } from "../../redux/slices/user.slice";

import { ButtonContainer, SignInContainer } from "./SignIn.styles";

const defaultFormValues = {
  email: "",
  password: "",
};

const SighIn = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = React.useState(defaultFormValues);
  const { email, password } = formValues;
  const clearForm = () => {
    setFormValues(defaultFormValues);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      dispatch(setUser(user));
      clearForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        throw new Error("User creation is errored");
      }
    }
  };
  return (
    <SignInContainer>
      <h2>Do you have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSumbit}>
        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType="google"
            type="butotn"
            onClick={signInWithGooglePopup}
          >
            Google Sign In
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SighIn;
