import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authetication.styles.scss";

const Authentication = () => {
  return (
    <div className="authetication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
