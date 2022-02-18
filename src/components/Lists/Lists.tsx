import React, {FC, SyntheticEvent, useState} from 'react';
import {IData, IListsProps} from "../../types";
import {InputListTitle} from "../Input-List-Title/Input-List-Title";
import {List, ListTitleWrap, ListMenu, ListButton, InputAddCard} from './Lists.styled';
import {listsData} from "../../store";
import {Cards} from "../Cards/Cards";
// @ts-ignore
import {ReactComponent as ThreeDotsICON} from "../../assets/icons/three-dots.svg";


export const Lists: FC<IListsProps> = ({listsDataProps, addCardClbkProps}) => {

  const [addCardOpen, setAddCardOpen] = useState<boolean>(false)
  const [cardTextValue, setCardTextValue] = useState<string>('')

  const listTitleClbck = (listDataArg: IData, listValue: string) => listsData
    .map((el) => el.id === listDataArg.id && listValue !== ''
      ? el.listTitle = listValue
      : null)
  ///////////////////////////////////////////////////////////////////////////// в компонент(
  const addCardHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    addCardClbkProps({
      id: 'card-kjnn1-3',
      cardTitle: cardTextValue,
      cardDescription: 'Описание',
      cardComment: 'Комментарий'
    }, listsDataProps)
    setCardTextValue('')
  }
/////////////////////////////////////////////////////////////////////////////////// )в компонент
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

        {/*///////////////////////////////////////////////////////////////////////////// в компонент(*/}
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
        {/*///////////////////////////////////////////////////////////////////////////// )в компонент*/}


      </List>
    </>
  )
}