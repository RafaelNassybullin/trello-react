import React, {FC, SyntheticEvent, useContext, useState} from 'react';
import {DataContext} from "../context/DataContext";
import {v4 as uuidv4} from "uuid";
import {IData} from "../interfaces";
import styled from "styled-components";

interface props {
  jhbjhbjh:IData
}
export const AddCard: FC<props> = ({jhbjhbjh}) => {

  const [addCardOpen, setAddCardOpen] = useState<boolean>(false);

  const [cardTextValue, setCardTextValue] = useState<string>('');

  const {addCards} = useContext(DataContext);

  const addCardHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    if (cardTextValue) {
      addCards({
        id: uuidv4(),
        cardTitle: cardTextValue,
        cardDescription: 'Описание',
        cardComment: ['комментарий-1', 'комментарий-2'],
        modalOpen:false
      }, jhbjhbjh)
    }
    setCardTextValue('')
  }

  return (
    <>
      <form onSubmit={addCardHandler}>
        {
          addCardOpen &&
          <InputAddCard
            autoFocus
            value={cardTextValue}
            onChange={e => setCardTextValue(e.target.value)}
            onBlur={(e) => (addCardHandler(e), setAddCardOpen(false))}
            type="text"/>
        }
        <ListButton
          onClick={() => setAddCardOpen(!addCardOpen)}
          style={{
            background: addCardOpen ? '#A470FE' : 'transparent',
            color: addCardOpen ? 'white' : 'gray'
          }}
          type={'button'}>
          + Add a card...
        </ListButton>
      </form>
    </>
  )
}

const InputAddCard = styled.input`
  width: 100%;
  font-size: 16px;
  height: 30px;
  border-radius: 3px;
  outline: none;
  border: 2px solid rgba(0, 152, 155, 1);
`
const ListButton = styled.button`
  position: absolute;
  bottom: 7px;
  left: 5px;
  outline: none;
  border: none;
  color: gray;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  padding: 3px 10px;
  border-radius: 3px;
`