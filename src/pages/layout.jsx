import * as React from "react";
import Header from "@/layout/header";
import { Outlet } from "react-router-dom";
import { PropTypes } from "prop-types";
import "./layout.scss";

const SubMenu = ({ subMenu }) => {
  return (
    <div className="sub-menu-container">
      {subMenu.map((item) => (
        <div key={item.name}>{item.name}</div>
      ))}
    </div>
  );
};

SubMenu.propTypes = {
  subMenu: PropTypes.arrayOf(PropTypes.object),
};
function Layout() {
  const [subMenu, setSubMenu] = React.useState([]);
  const handleMenuChange = (menu) => {
    setSubMenu([...menu]);
  };
  return (
    <div>
      <Header onMenuChange={handleMenuChange} />
      {subMenu.length > 0 && <SubMenu subMenu={subMenu} />}
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
