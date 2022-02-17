import React, { FC, useState} from 'react';
import {IColumnListsProps, IData} from "../../types";
import {
  AddListBtn,
  AuthorTitle,
  Card,
  List,
  ListButton,
  ListMenu,
  ListTitleWrap,
  ListWrap
} from './Column-Lists.styled';
import {listsData} from "../../store";
import {InputListTitle} from "../Input-List-Title/Input-List-Title";

// @ts-ignore
import {ReactComponent as ThreeDotsICON} from "../../assets/icons/three-dots.svg";


export const ColumnLists: FC<IColumnListsProps> = () => {
  const [data, setData] = useState<IData[]>(listsData)
  const [addCard, setAddCard] = useState<boolean>(false)
  const authorName: string | null = localStorage.getItem('name');

  return (
    <>
      {
        authorName &&
        <>
          <AuthorTitle>{authorName}</AuthorTitle>
          <ListWrap>

            {data.map((el) =>

              <List>
                <ListTitleWrap>
                  <InputListTitle listTitleData={el.listTitle}/>
                  <ListMenu><ThreeDotsICON/></ListMenu>
                </ListTitleWrap>

                {el.cards.map(el=><Card><p>{el.cardTitle}</p></Card>)}

                {addCard&&<input type="text"/>}

                <ListButton onClick={()=>setAddCard(!addCard)}>+ Add a card...</ListButton>
              </List>

            )}

            <AddListBtn>+ Add a list...</AddListBtn>

          </ListWrap>
        </>
      }
    </>
  )
}