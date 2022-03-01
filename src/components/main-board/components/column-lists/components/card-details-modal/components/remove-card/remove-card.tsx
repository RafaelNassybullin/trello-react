import React, {FC, useContext} from 'react';
import styled from "styled-components";
import {DataContext} from "context/DataContext";
import {ICards, IColumns} from "interfaces";
import {IconDelete} from "assets/icon-components/icon-delete";

interface props {
  cardData: ICards
}
export const RemoveCard: FC<props> = ({ cardData}) => {

  const { removeCard, closeModal } = useContext(DataContext);

  const removeCardHandler = () => {
    removeCard(cardData)
    closeModal()
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