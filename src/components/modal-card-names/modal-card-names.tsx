import React, {FC, useContext, useState} from 'react';
import styled from "styled-components";
import {DataContext} from "../../context/DataContext";
import {ICards, IData} from "../../interfaces";

interface props {
  modalTitleListData: IData
  modalTitleCardData: ICards
}

export const ModalCardNames: FC<props> = ({modalTitleListData, modalTitleCardData}) => {

  const [cardTitleValue, setCardTitleValue] = useState('');

  const [cardTitleChangeOpen, setcardTitleChangeOpen] = useState(false);

  const {changeCardTitles} = useContext(DataContext);

  const changeCardTitle = () => {
    setcardTitleChangeOpen(!cardTitleChangeOpen)

    if (cardTitleValue) {
      changeCardTitles(cardTitleValue, modalTitleListData, modalTitleCardData)
    }

  }

  return (
    <ModalCardName>

      <h3 onClick={changeCardTitle}>Card name:</h3>

      {!cardTitleChangeOpen && <p>{modalTitleCardData.cardTitle}</p>}

      {cardTitleChangeOpen &&
      <input type="text"
             onChange={e => setCardTitleValue(e.target.value)}
             onBlur={changeCardTitle}
             autoFocus/>}

    </ModalCardName>
  )
}
const ModalCardName = styled.div`

`