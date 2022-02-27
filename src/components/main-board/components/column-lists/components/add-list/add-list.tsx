import React, {FC, useContext} from 'react';
import {DataContext} from "context/DataContext";
import {v4 as uuidv4} from "uuid";
import {AddListBtnUI} from "ui/add-list-btn/add-list-btn";

export const AddList: FC = () => {
  const {addList, dataState} = useContext(DataContext)
  const {mainData} = dataState

  const handlerAddList = () => {
    addList({id: uuidv4(), listTitle: 'New List', cards: []})
    localStorage.setItem('localData', JSON.stringify(mainData))
  }

  return (
    <div onClick={handlerAddList}>
      <AddListBtnUI>
        + Add a list...
      </AddListBtnUI>
    </div>
  )
}


