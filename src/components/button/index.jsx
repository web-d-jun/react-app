import buttonStyle from  "./index.module.scss";
const Button = ({ name }) => {
  return <button type="button" className={buttonStyle.button}>{name}</button>;
};

export default Button;
