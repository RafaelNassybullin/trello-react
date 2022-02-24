import React, {FC, SyntheticEvent, useContext, useState} from 'react';
import {IData} from "../../../../../../../../interfaces";
import styled from "styled-components";
import {DataContext} from "../../../../../../../../context/DataContext";

interface props {
  listTitleData: IData
}

export const InputListTitle: FC<props> = ({listTitleData}) => {
  const [titleOpen, setTitleOpen] = useState<boolean>(false);
  const [titleValue, setTitleValue] = useState<string>(listTitleData.listTitle);

  const {changeListTitle} = useContext(DataContext);

  const listTitleHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    setTitleOpen(!titleOpen);
    setTitleValue(listTitleData.listTitle)
  }

  const titleChangeDispatchHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    changeListTitle(listTitleData.id, titleValue)
  }

  return (
    <>
      <ListTitleChange onSubmit={titleChangeDispatchHandler}>
        {
          titleOpen

            ? <ListTitleInput
              autoFocus
              onBlur={titleChangeDispatchHandler}
              onChange={(e) => (setTitleValue(e.target.value))}
              onFocus={e => e.target.select()}
              value={titleValue}
              type='text'/>

            : <ListTitle onClick={listTitleHandler}>{listTitleData.listTitle}</ListTitle>
        }
      </ListTitleChange>
    </>
  )
}


const ListTitleChange = styled.form`
  width: 100%;
`
const ListTitle = styled.h3`

`
const ListTitleInput = styled.input`
  width: 100%;
  font-size: 21px;
  font-weight: 700;
  background: white;
  outline: none;
  border: 2px solid rgba(0, 152, 155, 1);
  border-radius: 3px;
`