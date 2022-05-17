import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
    `;
  }}
`;

const StyledButton = styled.button`
  padding: 0.4rem 1.3rem;
  margin: 0.3rem 0 0.3rem 0.5rem;
  color: #373f41;
  font-size: 14px;
  border: 1px solid #c3cbcd;
  background-color: ${(props) => props.color || "#fff"};

  /* 색상 */
  ${colorStyles}

  border-radius: 0.25rem;
`;

const Button: React.FC<any> = ({ name, color, ...rest }) => {
  return (
    <StyledButton type="button" color={color} {...rest}>
      {name}
    </StyledButton>
  );
};
Button.defaultProps = {
  color: "red",
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
