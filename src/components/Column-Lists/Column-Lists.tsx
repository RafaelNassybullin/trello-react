import React, { FC } from 'react';
import {IColumnListsProps} from "../../types";
import {List, ListWrap, Title} from './Column-Lists.styled';

export const ColumnLists: FC<IColumnListsProps> = () => {
  const authorName:string|null = localStorage.getItem('name')
  const listData:string[] = ['TODO', 'In Progress', 'Testing', 'Done'];

  return (
    <>
      {authorName && <Title>{`Привет! ${authorName}`}</Title>}
      <ListWrap>
        {listData.map((el:string)=><List>
          <p>{el}</p>
        </List>)}
      </ListWrap>
    </>
  )
}