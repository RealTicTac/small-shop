import React from "react";
import { useNavigate } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

import { SignUpContainer } from "./SignUp.styles";

const defaultFormValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const schema = z
  .object({
    displayName: z.string().min(3).max(30),
    email: z.string().email().min(6).max(30),
    password: z.string().min(6).max(30),
    confirm: z.string().min(6).max(30),
  })
  .refine((data) => data.password === data.confirm, {
    message: `Passwords doesb't match`,
    path: ["confirm"],
  });

const SighUp = () => {
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
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        throw new Error("User creation is errored");
      }
    }
  };
  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput label="Display Name" name="displayName" control={control} />
        {errors.displayName?.message && <p>{errors.displayName.message}</p>}
        <FormInput label="Email" type="email" name="email" control={control} />
        {errors.email?.message && <p>{errors.email.message}</p>}
        <FormInput
          label="Password"
          type="password"
          name="password"
          control={control}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirm"
          control={control}
        />
        {errors.confirm?.message && <p>{errors.confirm.message}</p>}
        <Button type="submit">Sign In</Button>
      </form>
    </SignUpContainer>
  );
};

export default SighUp;
