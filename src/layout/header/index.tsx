import "./index.scss";
import Button from "component/button";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import menuItems from "./menu";
import styled from "styled-components";

const NaviButton = styled.div`
  font-size: 1.5rem;
  margin: 0 3rem;
  color: ${(props: any) => (props.selected ? "#3f7be7" : "#000")};
`;

const Header: React.FC<any> = ({ onMenuChange }) => {
  const navigate = useNavigate();
  const [menus, setMenus] = useState(menuItems);
  useEffect(() => {
    console.log("this navigate effect");
  }, [navigate]);
  const menuRouterInit = () => {
    menus.map((x) => (x.selected = false));
  };
  const goRouter = (item: any) => {
    menuRouterInit();
    const findIndex = menus.findIndex((x) => x.id === item.id);
    menus[findIndex].selected = true;
    setMenus([...menus]);
    onMenuChange(menus[findIndex].subMenu);
    navigate(item.location);
  };
  const mainRouter = () => {
    menuRouterInit();
    onMenuChange([]);
    navigate("/");
  };

  return (
    <div className="header-wrap">
      <div className="header flex items-center justify-center">
        <div role="button" className="logo" onClick={mainRouter}>
          AccuRator
        </div>
        <div className="flex flex-1 justify-center">
          {menus.map((item) => (
            <NaviButton
              key={item.name}
              role="button"
              selected={item.selected}
              onClick={() => goRouter(item)}
            >
              {item.name}
            </NaviButton>
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
