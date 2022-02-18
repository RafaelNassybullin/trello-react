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

  const authorName: string | null = localStorage.getItem('name');
  const [data, setData] = useState<IData[]>(listsData)
  const [addCard, setAddCard] = useState<boolean>(false)/////////в отдельный компонент
  const fu = (j:any, k:string) => listsData.map(el => el.id === j.id && k!=='' ? el.listTitle = k : null)


  //переименовать тестовые названия и добавить типизацию


  return (
    <>
      {
        authorName &&
        <>
          <AuthorTitle>{authorName}</AuthorTitle>

          <ListWrap>

            {data.map((el) =>

              <List>{/*///////////////////////////////////////////в отдельный компонент*/}
                <ListTitleWrap>
                  <InputListTitle listTitleData={el} clbkTest={fu}/>
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