import React, {FC, useContext, useState} from 'react';
import styled from "styled-components";
import {DataContext} from "../../context/DataContext";
import {ICards, IData} from "../../interfaces";

interface props {
  modalDescriptionCardData: ICards
  modalDescriptionListData: IData
}

export const ModalCardDescriptions: FC<props> = ({modalDescriptionListData, modalDescriptionCardData }) => {

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
      <h3 onClick={changeDescription}>Description</h3>
      {descriptionOpen && <input
        type="text"
        onChange={e => setDescriptionValue(e.target.value)}
        onBlur={changeDescription}
        autoFocus/>}
      {!descriptionOpen && <p>{modalDescriptionCardData.cardDescription}</p>}
    </ModalCardDescription>
  )
}
const ModalCardDescription = styled.div`

`