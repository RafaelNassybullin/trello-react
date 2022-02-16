import styled from "styled-components";

export const NameTitle = styled.h2`
  text-align: center;
  font-size: 48px;
  margin-bottom: 30px;
`
export const NameInput = styled.input`
  max-width: 300px;
  width: 100%;
  height: 50px;
  outline: none;
  padding: 0 10px;
  border-radius: 6px;
  border: 2px solid #CCCCCC;
  font-size: 20px;

  &:focus {
    border: 2px solid #89cea5;
  }
`