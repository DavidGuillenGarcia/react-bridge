import FormContainer from "../Molecules/FormContainer";

const LoginLayout = () => {
  const options = {
    title: "Login",
    textfield1Type: "text",
    textfield1Placeholder: "Your username",
    textfield1Id: "username-field",
    textfield2Type: "password",
    textfield2Placeholder: "Your password",
    textfield2Id: "password-field",
    buttonClassName: "btn btn-primary",
    buttonText: "Login",
  };

  return <FormContainer options={options} />;
};

export default LoginLayout;
