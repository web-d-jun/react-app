import "./index.scss";
function Button({ name }) {
  return <button type="button">{name}</button>;
}
const Header = ({ test }) => {
  return (<div className="header">
    <Button name="Home"/>
  </div>);
};

export default Header;
