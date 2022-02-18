import React, {FC} from 'react';
import {ICards, ICardsProps} from "../../types";
import {Card, CardText} from './Cards.styled';

export const Cards: FC<ICardsProps> = ({cardsDataProps}) => {
  return (
    <>
      {
        cardsDataProps.cards.map((el: ICards) =>
          <Card onClick={() => console.log(cardsDataProps, el)}>
            <CardText>{el.cardTitle}</CardText>
          </Card>)
      }
    </>
  )
}