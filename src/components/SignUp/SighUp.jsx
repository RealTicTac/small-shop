import React from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../FormInput/FormInput";

const defaultFormValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SighUp = () => {
  const [formValues, setFormValues] = React.useState(defaultFormValues);
  const { displayName, email, password, confirmPassword } = formValues;
  const clearForm = () => {
    setFormValues(defaultFormValues);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSumbit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords fo not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user);
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
    <form onSubmit={() => {}}>
      <FormInput
        required
        type="text"
        name="displayName"
        value={displayName}
        onChange={handleChange}
      />
      <FormInput
        required
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <FormInput
        required
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <FormInput
        required
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleChange}
      />
      <button type="submit"></button>
    </form>
  );
};

export default SighUp;
