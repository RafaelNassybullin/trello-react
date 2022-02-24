import React, {FC, useContext} from 'react';
import styled from "styled-components";
import {DataContext} from "../../../../../../../../../../../../context/DataContext";
import {ICards, IData} from "../../../../../../../../../../../../interfaces";
//@ts-ignore
import {ReactComponent as DeleteIcon} from "../../../../../../../../../../../../assets/icon-components/delete-card.svg";

interface props {
  listsData: IData
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
        <DeleteIcon/>
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