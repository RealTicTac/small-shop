import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import * as z from "zod";

import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { setUser } from "../../redux/slices/user.slice";

import { ButtonContainer, SignInContainer } from "./SignIn.styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email().min(6).max(40),
  password: z.string().min(6).max(30),
});

const SighIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = async (data, e) => {
    e.preventDefault();

    try {
      const { email, password } = data;
      const { user } = await signInUserWithEmailAndPassword(email, password);
      dispatch(setUser(user));
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        throw new Error("User creation is errored");
      }
    }
  };
  const handleGoogleSignIn = async (e) => {
    await signInWithGooglePopup();
    navigate("/");
  };

  return (
    <SignInContainer>
      <h2>Do you have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput label="Email" name="email" control={control} />
        {errors.email?.message && <p>{errors.email.message}</p>}
        <FormInput
          label="Password"
          type="password"
          name="password"
          control={control}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}
        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType="google"
            type="button"
            onClick={handleGoogleSignIn}
          >
            Google Sign In
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SighIn;
