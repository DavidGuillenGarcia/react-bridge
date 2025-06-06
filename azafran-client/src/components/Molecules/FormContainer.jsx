import Title from "../Atoms/Title";
import FormField from "../Atoms/FormField";
import Button from "../Atoms/Button";

const FormContainer = ({ options }) => {
  return (
    <div className="d-flex flex-column gap-3 justify-content-between form-container shadow p-5 rounded rounded-3">
      <Title text={options.title} />
      <div className="d-flex flex-column gap-2">
        <FormField
          type={options.textfield1Type}
          placeholder={options.textfield1Placeholder}
          id={options.textfield1Id}
        />
        <FormField
          type={options.textfield2Type}
          placeholder={options.textfield2Placeholder}
          id={options.textfield2Id}
        />
      </div>
      <div className="btn-container">
        <Button className={options.buttonClassName} text={options.buttonText} />
      </div>
    </div>
  );
};

export default FormContainer;
