const Button = ({ className, text }) => {
  return (
    <button type="button" className={className}>
      {text}
    </button>
  );
};

export default Button;
