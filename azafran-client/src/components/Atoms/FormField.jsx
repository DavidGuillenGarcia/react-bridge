const FormField = ({ type, placeholder, id }) => {
  return (
    <input
      type={type}
      id={id}
      className="form-control"
      placeholder={placeholder}
    />
  );
};

export default FormField;
