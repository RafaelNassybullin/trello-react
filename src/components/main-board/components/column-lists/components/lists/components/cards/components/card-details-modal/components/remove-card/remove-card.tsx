import React, {FC, useContext} from 'react';
import styled from "styled-components";
import {DataContext} from "context/DataContext";
import {ICards, IColumns} from "interfaces";
import {IconDelete} from "assets/icon-components/icon-delete";

interface props {
  listsData: IColumns
  cardData: ICards
}
export const RemoveCard: FC<props> = ({listsData, cardData}) => {

  const {openModal, removeCard, dataState} = useContext(DataContext);
  const {mainData} = dataState

  const removeCardHandler = () => {
    openModal(cardData, false)
    removeCard(listsData, cardData)
    localStorage.setItem('localData', JSON.stringify(mainData))
  }

  return (
    <>
      <DeleteCard onClick={removeCardHandler}>
        <IconDelete/>
      </DeleteCard>
    </>
  )
}

const DeleteCard = styled.div`
  position: absolute;
  bottom: -7px;
  right: -7px;
  width: 30px;
  height: 30px;
  display: grid;
  border-radius: 50%;
  place-items: center;
  cursor: pointer;
  background: red;
`