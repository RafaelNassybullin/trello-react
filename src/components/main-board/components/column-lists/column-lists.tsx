import React, {FC, useContext} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Lists} from "./components";
import {AddList} from "./components";
import {DataContext} from "context/DataContext";
import styled from "styled-components";
import {IColumns} from "interfaces";

export const ColumnLists: FC = () => {

  const authorName: string | null = localStorage.getItem('name');
  const { dataState } = useContext(DataContext);
  const { mainData } = dataState

  return (
    <>
      {authorName &&
        <>
          <AuthorTitle>{authorName}</AuthorTitle>
          <ListWrap>
            {mainData.map((el: IColumns) => <Lists key={uuidv4()} listsDataProps={el}/>)}
            <AddList/>
          </ListWrap>
        </>}
    </>
  )
}

const AuthorTitle = styled.h1`
  color: white;
  font-size: 3rem;
`
const ListWrap = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`

