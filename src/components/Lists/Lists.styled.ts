import styled from "styled-components";

export const List = styled.div`
  position: relative;
  width: 300px;
  background: var(--list-bg);
  border-radius: 3px;
  color: black;
  margin: 5px;
  padding: 7px 5px 40px 5px;
`

export const ListButton = styled.button`
  position: absolute;
  bottom: 7px;
  left: 5px;
  outline: none;
  border: none;
  color: gray;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  padding: 3px 10px;
  border-radius: 3px;
`
export const ListMenu = styled.div`
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 7px;
  cursor: pointer;
  &:hover{
    background: #CCCCCC;
  }
  svg{
    width: 15px;
  }
`
export const ListTitleWrap = styled.div`
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
`

export const InputAddCard = styled.input`
  width: 100%;
  font-size: 16px;
  height: 30px;
  border-radius: 3px;
  outline: none;
  border: 2px solid rgba(0,152,155,1);
`