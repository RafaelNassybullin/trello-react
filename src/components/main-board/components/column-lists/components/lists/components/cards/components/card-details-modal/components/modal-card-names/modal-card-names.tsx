import React, {FC, SyntheticEvent, useContext, useState} from 'react';
import styled from "styled-components";
import {DataContext} from "../../../../../../../../../../../../context/DataContext";
import {ICards, IData} from "../../../../../../../../../../../../interfaces";
import {ModalCardNameButton} from '../../../../../../../../../../../../styles/globalStyles';
//@ts-ignore
import {ReactComponent as EditIcon} from "../../../../../../../../../../../../assets/icon-components/edit.svg";

interface props {
  modalTitleListData: IData
  modalTitleCardData: ICards
}

export const ModalCardNames: FC<props> = ({modalTitleListData, modalTitleCardData}) => {
  const [cardTitleValue, setCardTitleValue] = useState('');
  const [cardTitleChangeOpen, setcardTitleChangeOpen] = useState(false);

  const {changeCardTitles} = useContext(DataContext);

  const changeCardTitle = (e: SyntheticEvent) => {
    e.preventDefault()
    setcardTitleChangeOpen(!cardTitleChangeOpen)
    if (cardTitleValue) {
      changeCardTitles(cardTitleValue, modalTitleListData, modalTitleCardData)
    }
  }

  return (
    <ModalCardNameForm onSubmit={changeCardTitle}>

      <ModalCardNameTitleWrap>
        <h3>Card name:</h3>
        <ModalCardNameButton onClick={changeCardTitle}>
          <EditIcon/>
        </ModalCardNameButton>
      </ModalCardNameTitleWrap>

      {!cardTitleChangeOpen && <p>{modalTitleCardData.cardTitle}</p>}

      {cardTitleChangeOpen && <ModalCardNameInput
        type="text"
        onBlur={changeCardTitle}
        onChange={e => setCardTitleValue(e.target.value)}
        autoFocus/>}

    </ModalCardNameForm>
  )
}

const ModalCardNameForm = styled.form`
  margin: 8px 0;
`
const ModalCardNameTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ModalCardNameInput = styled.input`
  width: 50%;
  outline: none;
  background: white;
  border: 2px solid #CCCCCC;
  border-radius: 3px;
  height: 30px;

  &:focus {
    border: 1px solid seagreen;
  }
`