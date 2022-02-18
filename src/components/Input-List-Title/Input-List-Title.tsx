import React, {FC, SyntheticEvent, useState} from 'react';
import {IInputListTitleProps} from "../../types";
import {ListTitleInput, ListTitleChange, ListTitle} from './Input-List-Title.styled';

export const InputListTitle: FC<IInputListTitleProps> = ({listTitleData, listTitleClbck}) => {
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