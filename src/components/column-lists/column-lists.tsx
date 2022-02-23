import React, {FC, useContext, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Lists} from "../lists";
import {AddList} from "../add-list";
import {DataContext} from "../../context/DataContext";
import styled from "styled-components";
import {IData} from "../../interfaces";

interface props {

}

export const ColumnLists: FC<props> = () => {

  const authorName: string | null = localStorage.getItem('name');
  const {dataState} = useContext(DataContext);
  const {datass} = dataState

  return (
    <>
      {
        authorName &&
        <>
          <AuthorTitle>{authorName}</AuthorTitle>
          <ListWrap>
            {
              datass.map((el: IData) => <Lists
                key={uuidv4()}
                listsDataProps={el}/>)
            }
            <AddList/>
          </ListWrap>
        </>
      }
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

