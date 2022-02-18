import React, {FC, useState} from 'react';
import {ICards, IColumnListsProps, IData} from "../../types";
import {AddListBtn, AuthorTitle, ListWrap} from './Column-Lists.styled';
import {listsData} from "../../store";
import {Lists} from "../Lists/Lists";

export const ColumnLists: FC<IColumnListsProps> = () => {
  const authorName: string | null = localStorage.getItem('name');
  const [data, setData] = useState<IData[]>(listsData)

///////////////////////////////////////////////////////////////////////////// в компонент(
  const addCardClbk = (cardsArg: ICards, listArg: IData) => {
    cardsArg.cardTitle && listsData.map((el: IData) => el.id === listArg.id
      ? el.cards.push(cardsArg)
      : null)
  }
//////////////////////////////////////////////////////////////////////////// )в компонент

  return (
    <>
      {
        authorName &&
        <>
          <AuthorTitle>{authorName}</AuthorTitle>{/*имя автора*/}
          <ListWrap>{/*Контейнер списков*/}
            {
              data.map((el) => <Lists listsDataProps={el} addCardClbkProps={addCardClbk}/>)
            }
            <AddListBtn>+ Add a list...</AddListBtn>{/*Добавить список*/}
          </ListWrap>
        </>
      }
    </>
  )
}


