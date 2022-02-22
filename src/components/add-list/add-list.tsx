import React, {FC, useContext} from 'react';
import styled from "styled-components";
import { DataContext } from "../../context/DataContext";
import { v4 as uuidv4 } from "uuid";

interface props {

}

export const AddList: FC<props> = () => {

  const { addLiss } = useContext(DataContext)

  const handlerAddList = () => addLiss({ id: uuidv4(), listTitle: 'New List', cards: [] })

  return (
      <AddListBtn onClick={handlerAddList}>+ Add a list...</AddListBtn>
  )
}

const AddListBtn = styled.button`
  margin-top: 5px;
  width: 300px;
  height: 50px;
  border-radius: 3px;
  font-size: 16px;
  color: white;
  outline: none;
  border: none;
  text-align: start;
  padding: 0 15px;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`
