import React from "react";
import styled from "styled-components";

const Input = styled.input`
  order: 1px solid #FFF;
  background: transparent;
  border: 1px solid #FFF;
  padding: 20px 140px;
  border-radius: 50px;
  widht: 200px;
  color: #FFF;
  margin-bottom: 10px;

  &::placeholder {
      color: #FFF;
      font-size: 16px;
  }

`;

export default Input;