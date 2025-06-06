import FormContainer from "../Molecules/FormContainer";

const RegisterLayout = () => {
  const options = {
    title: "Register",
    textfield1Type: "text",
    textfield1Placeholder: "New username",
    textfield1Id: "username-field",
    textfield2Type: "password",
    textfield2Placeholder: "New password",
    textfield2Id: "password-field",
    buttonClassName: "btn btn-primary",
    buttonText: "Register",
  };

  return <FormContainer options={options} />;
};

export default RegisterLayout;
