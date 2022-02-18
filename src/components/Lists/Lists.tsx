import React, { FC, useState } from 'react';
import { IListsProps } from "../../types";
import { InputListTitle } from "../Input-List-Title/Input-List-Title";
import { List , ListTitleWrap, ListMenu, ListButton} from './Lists.styled';
import { listsData } from "../../store";

// @ts-ignore
import {ReactComponent as ThreeDotsICON} from "../../assets/icons/three-dots.svg";
import {Cards} from "../Cards/Cards";

export const Lists:FC<IListsProps> = ({listsDataProps}) => {

    const [addCard, setAddCard] = useState<boolean>(false)
    const fu = (j:any, k:string) => listsData.map((el) => el.id === j.id && k!=='' ? el.listTitle = k : null)

    return (
        <>
            <List>{/*список*/}

                <ListTitleWrap>{/*Контейнер заголовка списка*/}
                  <InputListTitle listTitleData={listsDataProps} clbkTest={fu}/>{/*Логика меняющая инпуты, данные, калбек изменения данных*/}
                  <ListMenu>{/*Враппер для меню три точки*/}
                    <ThreeDotsICON/>{/*Иконка SVGR меню три точки, верни мой SVGR TypeScript...*/}
                  </ListMenu>
                </ListTitleWrap>

                {listsDataProps.cards.map((el)=><Cards cardsDataProps={el}/>)}{/*Карточки*/}

                {addCard&&<input type="text"/>}
                <ListButton onClick={()=>setAddCard(!addCard)}>+ Add a card...</ListButton>

              </List>
        </>
    )
}