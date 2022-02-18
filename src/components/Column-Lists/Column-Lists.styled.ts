import styled from "styled-components";

export const AuthorTitle = styled.h1`
  color:white;
  font-size: 3rem;
`
export const ListWrap = styled.div`
  display:flex;
  align-items: flex-start;
  flex-wrap: wrap;
`
export const AddListBtn = styled.button`
  margin-top: 5px;
  width: 300px;
  height: 50px;
  border-radius: 3px;
  font-size: 16px;
  color: white;
  outline: none;
  border: none;
  text-align: start;
  padding: 0 15px;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  &:hover{
    background: rgba(255, 255, 255, 0.4);
  }
`