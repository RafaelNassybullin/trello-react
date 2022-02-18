import React, { FC, useState} from 'react';
import { IColumnListsProps, IData } from "../../types";
import { AddListBtn, AuthorTitle, ListWrap } from './Column-Lists.styled';
import { listsData } from "../../store";
import { Lists } from "../Lists/Lists";

export const ColumnLists: FC<IColumnListsProps> = () => {

  const authorName: string | null = localStorage.getItem('name');
  const [data, setData] = useState<IData[]>(listsData)

  return (
    <>
      {
        authorName &&
        <>
          <AuthorTitle>{authorName}</AuthorTitle>
          <ListWrap>
            {
              data.map((el) => <Lists listsDataProps={el}/>)
            }
            <AddListBtn>+ Add a list...</AddListBtn>
          </ListWrap>
        </>
      }
    </>
  )
}


