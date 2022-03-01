import React, {FC, useContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {ICards, IColumns} from "interfaces";
import styled from "styled-components";
import {CardDetailsModal} from "./components";
import {DataContext} from "context/DataContext";
import {IconComments} from "assets/icon-components/icon-comments";
import {CommentCount} from './components/comment-count/comment-count';

interface props {
  cardsDataProps: IColumns
}

export const Cards: FC<props> = ({cardsDataProps}) => {
  const [state, setState] = useState<boolean>(false)
  const {openModal, dataState} = useContext(DataContext);
  const {cards, comments} = dataState

  const handleCard = (el: ICards) => {
    setState(!state)
    openModal(el.id)
  }

  return (
    <>
      {
        cards.map((el: ICards) => (
          cardsDataProps.id === el.columnID &&
          <React.Fragment key={uuidv4()}>
            <Card onClick={() => handleCard(el)}>
              <CardText>{el.cardTitle}</CardText>
              <CommentCount cardProp={el}/>
            </Card>
          </React.Fragment>
        ))
      }
    </>
  )
}

const Card = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 3px;
  background: white;
  margin: 8px 0;
  box-shadow: 0 0 7px #CCCCCC;
  padding: 8px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  &:hover {
    background: #40E3B5;
    color: white;
  }
`
const CardText = styled.p`

`
