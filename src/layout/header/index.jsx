import "./index.scss";
import Button from "component/button";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import menuItems from "./menu";
import { PropTypes } from "prop-types";
const Header = ({ onMenuChange }) => {
  const navigate = useNavigate();
  const [menus, setMenus] = useState(menuItems);
  useEffect(() => {
    console.log("this navigate effect");
  }, [navigate]);
  const menuRouterInit = () => {
    menus.map((x) => (x.selected = false));
    onMenuChange([])
  }
  const goRouter = (item) => {
    menuRouterInit();
    const findIndex = menus.findIndex((x) => x.id === item.id);
    menus[findIndex].selected = true;
    setMenus([...menus]);
    onMenuChange(menus[findIndex].subMenu)
    navigate(item.location);
  };
  const mainRouter = () => {
    menuRouterInit();
    navigate('/');
  }
  return (
    <div className="header-wrap">
      <div className="header flex items-center justify-center">
        <div role="button" className="logo" onClick={mainRouter}>AccuRator</div>
        <div className="flex flex-1 justify-center">
          {menus.map((item) => (
            <div
              key={item.name}
              className={`navigation-button ${
                item.selected ? "selected" : "not-selected"
              }`}
              role="button"
              onClick={() => goRouter(item)}
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

Header.propTypes = {
  onMenuChange: PropTypes.func
}
export default Header;
