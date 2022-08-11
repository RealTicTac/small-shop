import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  return (
    <div>
      <button onClick={signInWithGooglePopup}></button>
    </div>
  );
};

export default Authentication;
