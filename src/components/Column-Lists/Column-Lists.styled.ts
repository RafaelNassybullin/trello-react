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
export const List = styled.div`
  position: relative;
  width: 300px;
  background: var(--list-bg);
  border-radius: 3px;
  color: black;
  margin: 5px;
  padding: 7px 5px 40px 5px;
`
export const ListTitleWrap = styled.div`
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
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

export const Card = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 3px;
  background: white;
  margin: 8px 0;
  box-shadow: 0 0 7px #CCCCCC;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background: #40E3B5;
    color: white;
  }
`
export const ListButton = styled.button`
  position: absolute;
  bottom: 7px;
  left: 5px;
  outline: none;
  border: none;
  background: transparent;
  color: gray;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  padding: 3px 10px;
  border-radius: 3px;

  &:hover {
    color: white;
    background: #A470FE;
  }
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