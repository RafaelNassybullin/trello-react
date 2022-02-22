import React, {FC, useContext} from 'react';
import { IData } from "../../interfaces";
import {InputListTitle} from "../input-list-title";
import {Cards} from "../card";
import styled from "styled-components";
import {AddCard} from "../add-card";
import {DataContext} from "../../context/DataContext";
// @ts-ignore
import {ReactComponent as ThreeDotsICON} from "../../assets/icons/three-dots.svg";

interface props {
  listsDataProps: IData
}

export const Lists: FC<props> = ({listsDataProps}) => {

  const { removeList } = useContext(DataContext);

  const removeHandler = () => {
    removeList(listsDataProps)
  }

  return (
    <>
      <List>

        <ListTitleWrap>

          <InputListTitle listTitleData={listsDataProps}/>

          <ListMenu onClick={removeHandler}>
            <ThreeDotsICON/>
          </ListMenu>

        </ListTitleWrap>

        <Cards cardsDataProps={listsDataProps}/>

        <AddCard listDataAddCardProps={listsDataProps}/>

      </List>
    </>
  )
}


const List = styled.div`
  position: relative;
  width: 300px;
  background: var(--list-bg);
  border-radius: 3px;
  color: black;
  margin: 5px;
  padding: 7px 5px 40px 5px;
`
const ListMenu = styled.div`
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    background: #CCCCCC;
  }
  svg {
    width: 15px;
  }
`
const ListTitleWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`