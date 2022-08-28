import "../../assets/css/main.css";

const Form = ({ children, onSubmit }) => {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
