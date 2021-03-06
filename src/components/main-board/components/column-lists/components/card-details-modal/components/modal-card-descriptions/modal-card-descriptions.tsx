import React, {FC, useContext, useState} from 'react';
import styled from "styled-components";
import {DataContext} from "context/DataContext";
import {ICards, IColumns} from "interfaces";
import {ModalCardNameButton} from "styles/globalStyles";
import {IconEdit} from "assets/icon-components/icon-edit";

interface props {
  modalDescriptionCardData: ICards
}

export const ModalCardDescriptions: FC<props> = ({ modalDescriptionCardData }) => {
  const [descriptionValue, setDescriptionValue] = useState('');
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const {changeDescriptions} = useContext(DataContext);

  const changeDescription = () => {
    setDescriptionOpen(!descriptionOpen)
    if (descriptionValue) {
      changeDescriptions(descriptionValue, modalDescriptionCardData)
    }
  }

  return (
    <ModalCardDescription>
      <ModalCardDescriptionWrap>
        <ModalCardDescriptionTitle>Description</ModalCardDescriptionTitle>
        <ModalCardNameButton onClick={changeDescription}>
          <IconEdit/>
        </ModalCardNameButton>
      </ModalCardDescriptionWrap>
      {descriptionOpen && <ModalCardDescriptionInput onChange={e => setDescriptionValue(e.target.value)} onBlur={changeDescription} autoFocus/>}
      {!descriptionOpen && <DescriptionBlock onClick={changeDescription}>
        <p>{modalDescriptionCardData.cardDescription}</p>
      </DescriptionBlock>}
    </ModalCardDescription>
  )
}
const ModalCardDescription = styled.div`
  margin-bottom: 15px;
`
const ModalCardDescriptionTitle = styled.h2`

`
const ModalCardDescriptionWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const DescriptionBlock = styled.div`
  margin-top: 10px;
  background: #E3E4E6;
  width: 100%;
  height: 45px;
  padding: 5px;
  border-radius: 3px;
    cursor: pointer;

`
const ModalCardDescriptionInput = styled.textarea`
  width: 100%;
  height: 45px;
  background: #E3E4E6;
  border-radius: 3px;
  outline: none;
  border: none;
  margin-top: 15px;
  font-size: 16px;
  resize: none;
  padding: 3px;
  &:focus {
    border: seagreen 1px solid;
  }
`
