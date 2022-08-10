import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  return (
    <div>
      <button onClick={signInWithGooglePopup}></button>
    </div>
  );
};

export default SignIn;
