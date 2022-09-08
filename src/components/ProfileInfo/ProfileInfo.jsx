import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  selectCurrentUser,
  selectUserInfo,
  setUserInfo,
} from "redux/slices/user.slice";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import FormInput from "components/FormInput/FormInput";
import { Container } from "./ProfileInfo.styles";
import { setUserInfoToDb } from "utils/firebase/firebase.utils";

const schema = z.object({
  firstName: z.string().min(2, { message: "Minimun 2 characters required" }),
  lastName: z.string().min(3, { message: "Minimun 3 characters required" }),
  email: z.string().email(),
  shippingAddress: z.string().min(1, { nessage: "Required field" }).max(100),
});
const ProfileInfo = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const user = useSelector(selectCurrentUser);
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: zodResolver(schema) });
  const onSumbit = async (data, e) => {
    e.preventDefault();
    dispatch(setUserInfo({ ...userInfo, ...data }));
    await setUserInfoToDb(user, { ...userInfo, ...data });
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(onSumbit)}>
        <FormInput
          label="First name"
          name="firstName"
          control={control}
          defaultValue={userInfo.firstName}
        />
        {errors.firstName?.message && <p>{errors.firstName.message}</p>}
        <FormInput
          label="Last name"
          name="lastName"
          control={control}
          defaultValue={userInfo.lastName}
        />
        {errors.lastName?.message && <p>{errors.lastName.message}</p>}
        <FormInput
          label="Email"
          name="email"
          control={control}
          defaultValue={userInfo.email}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}
        <FormInput
          label="Shipping address"
          name="shippingAddress"
          control={control}
          defaultValue={userInfo.shippingAddress}
        />
        {errors.shippingAddress?.message && (
          <p>{errors.shippingAddress.message}</p>
        )}
        <button>Save</button>
      </form>
    </Container>
  );
};

export default ProfileInfo;
