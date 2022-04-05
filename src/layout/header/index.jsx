import "./index.scss";
import Button from "component/button";
const menuItems = ["Data 상품", "제공 Service", "Use Case", "Support"];
const Header = ({ test }) => {
  return (
    <div className="header-wrap">
      <div className="header flex items-center justify-center">
        <div className="logo">AccuRator</div>
        <div className="flex flex-1 justify-center">
          {menuItems.map((item) => (
            <div className="navigation-button" role="button">
              {item}
            </div>
          ))}
        </div>
        <div>
          <Button name="검색" />
          <Button name="회원가입" />
          <Button name="로그인" />
        </div>
      </div>
    </div>
  );
};

export default Header;
