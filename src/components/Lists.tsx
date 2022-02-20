import React, {FC, SyntheticEvent, useContext, useState} from 'react';
import {ICards, IData} from "../interfaces";
import {InputListTitle} from "./Input-List-Title";
import {listsData} from "../store";
import {v4 as uuidv4} from "uuid";
import {Cards} from "./Cards";

// @ts-ignore
import {ReactComponent as ThreeDotsICON} from "../assets/icons/three-dots.svg";
import styled from "styled-components";

interface props {
  listsDataProps: IData
}

export const Lists: FC<props> = ({listsDataProps}) => {
  const [addCardOpen, setAddCardOpen] = useState<boolean>(false);
  const [cardTextValue, setCardTextValue] = useState<string>('')

  const listTitleClbck = (listDataArg: IData, listValue: string) => listsData
    .map((el) => el.id === listDataArg.id && listValue !== ''
      ? el.listTitle = listValue
      : null)

  const addCardClbk = (cardsArg: ICards, listArg: IData) => {
    cardsArg.cardTitle && listsData.map((el: IData) => el.id === listArg.id
      ? el.cards.push(cardsArg)
      : null)
  }

  const addCardHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    addCardClbk({
      id: uuidv4(),
      cardTitle: cardTextValue,
      cardDescription: 'Описание',
      cardComment: 'Комментарий'
    }, listsDataProps)
    setCardTextValue('')
  }

  return (
    <>
      <List>{/*список*/}
        <ListTitleWrap>{/*Контейнер заголовка списка*/}
          <InputListTitle
            listTitleData={listsDataProps}
            listTitleClbck={listTitleClbck}
          />{/*Логика меняющая инпуты, данные, калбек изменения данных*/}
          <ListMenu>{/*Враппер для меню три точки*/}
            <ThreeDotsICON/>{/*Иконка SVGR меню три точки, где SVGR TypeScript?...*/}
          </ListMenu>
        </ListTitleWrap>
        <Cards cardsDataProps={listsDataProps}/>{/*Карточки*/}

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
const ListMenu = styled.div`
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 7px;
  cursor: pointer;
  &:hover{
    background: #CCCCCC;
  }
  svg{
    width: 15px;
  }
`
const ListTitleWrap = styled.div`
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
`

const InputAddCard = styled.input`
  width: 100%;
  font-size: 16px;
  height: 30px;
  border-radius: 3px;
  outline: none;
  border: 2px solid rgba(0,152,155,1);
`