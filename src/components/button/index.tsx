import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const colorStyles = css<{ color: string }>`
  ${({ color }) => {
    return css`
      color: ${color};
    `;
  }}
`;

const StyledButton = styled.button<{ primary: string; color: string }>`
  padding: 0.4rem 1.3rem;
  margin: 0.3rem 0 0.3rem 0.5rem;
  color: #373f41;
  font-size: 14px;
  border: 1px solid #c3cbcd;
  background-color: ${(props: any) => props.color || "#fff"};

  /* 색상 */
  ${(props) =>
    props.primary &&
    css`
      background-color: #fff !important;
    `}

  border-radius: 0.25rem;
`;

const Button: React.FC<any> = ({ name, color, ...props }) => {
  return (
    <StyledButton type="button" color={color} {...props}>
      {name}
    </StyledButton>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
