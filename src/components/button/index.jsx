import React from "react";
import buttonStyle from "./index.module.scss";
import { PropTypes } from "prop-types";

const Button = ({ name }) => {
  return (
    <button type="button" className={buttonStyle.button}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
