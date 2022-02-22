import React, {FC, useContext, useState} from 'react';
import styled from "styled-components";
import {DataContext} from "../../context/DataContext";
import {ICards, IData} from "../../interfaces";

interface props {
  modalDescriptionCardData: ICards
  modalDescriptionListData: IData
}

export const ModalCardDescriptions: FC<props> = ({modalDescriptionListData, modalDescriptionCardData}) => {

  const {changeDescriptions} = useContext(DataContext);
  const [descriptionValue, setDescriptionValue] = useState('');
  const [descriptionOpen, setDescriptionOpen] = useState(false);

  const changeDescription = () => {

    setDescriptionOpen(!descriptionOpen)
    if (descriptionValue) {
      changeDescriptions(descriptionValue, modalDescriptionListData, modalDescriptionCardData)
    }
  }

  return (
    <ModalCardDescription>
      <ModalCardDescriptionWrap>
        <ModalCardDescriptionTitle>Description</ModalCardDescriptionTitle>
        <ModalCardBtn onClick={changeDescription}>change</ModalCardBtn>
      </ModalCardDescriptionWrap>

      {descriptionOpen && <ModalCardDescriptionInput
        onChange={e => setDescriptionValue(e.target.value)}
        onBlur={changeDescription}
        autoFocus/>}
      {!descriptionOpen &&

      <DescriptionBlock>
        <p>{modalDescriptionCardData.cardDescription}</p>
      </DescriptionBlock>

      }
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
const ModalCardBtn = styled.button`
  background: tomato;
  color: white;
  outline: none;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`
const DescriptionBlock = styled.div`
  margin-top: 10px;
  background: #E3E4E6;
  width: 100%;
  height: 45px;
  padding: 5px;
  border-radius: 3px;
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
