import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.4rem 1.3rem;
  margin: 0.3rem 0 0.3rem 0.5rem;
  color: #373f41;
  font-size: 14px;
  border: 1px solid #c3cbcd;
  background: #fff;
  border-radius: 0.25rem;
`;


const Button = ({ name }) => {
  return (
    <StyledButton type="button">
      {name}
    </StyledButton>
  );
};

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
