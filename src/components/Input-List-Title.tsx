import React, {FC, SyntheticEvent, useState} from 'react';
import {IData} from "../interfaces";
import styled from "styled-components";


interface props {
  listTitleData: IData
  listTitleClbck: (listTitleParam: IData, titleValue: string) => void
}

export const InputListTitle: FC<props> = ({listTitleData, listTitleClbck}) => {
  const [titleOpen, setTitleOpen] = useState<boolean>(false)
  const [titleValue, setTitleValue] = useState<string>(listTitleData.listTitle)

  const listTitleHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    setTitleOpen(!titleOpen);
    listTitleClbck(listTitleData, titleValue)
    setTitleValue(listTitleData.listTitle)
  }

  return (
    <>
      <ListTitleChange onSubmit={listTitleHandler}>
        {
          titleOpen
            ? <ListTitleInput
              autoFocus
              onBlur={listTitleHandler}
              onChange={(e) => (setTitleValue(e.target.value))}
              onFocus={e => e.target.select()}
              value={titleValue}
              type='text'/>

            : <ListTitle
              onClick={listTitleHandler}>
              {listTitleData.listTitle}
            </ListTitle>
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