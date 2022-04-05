import "./index.scss";
import Button from "component/button";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
const menuItems = [
  {
    name: "Data 상품",
    location: "/data/infomap",
  },
  {
    name: "제공 Service",
  },
  {
    name: "Use Case",
  },
  {
    name: "Support",
  },
];
const Header = ({ history }) => {
  console.log(history)
  const navigate = useNavigate();
  console.log(navigate)
  useEffect(() => {
    console.log("this effect");
  }, [navigate]);
  return (
    <div className="header-wrap">
      <div className="header flex items-center justify-center">
        <div className="logo">AccuRator</div>
        <div className="flex flex-1 justify-center">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="navigation-button"
              role="button"
              onClick={() => navigate(item.location)}
            >
              {item.name}
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
