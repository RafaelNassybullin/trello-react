import React, {FC} from 'react';
import {v4 as uuidv4} from 'uuid';
import {ICards, IData} from "../interfaces";
import styled from "styled-components";

interface props {
  cardsDataProps: IData
}

export const Cards: FC<props> = ({cardsDataProps}) => {
  return (
    <>
      {
        cardsDataProps.cards.map((el: ICards) =>
          <Card key={uuidv4()} onClick={() => console.log(cardsDataProps, el)}>
            <CardText>{el.cardTitle}</CardText>
          </Card>)
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

  &:hover {
    background: #40E3B5;
    color: white;
  }
`
const CardText = styled.p`

`