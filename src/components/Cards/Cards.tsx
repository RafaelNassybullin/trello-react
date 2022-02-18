import React, {FC} from 'react';
import {ICardsProps} from "../../types";
import { Card } from './Cards.styled';

export const Cards: FC<ICardsProps> = ({cardsDataProps}) => {
  return (
    <>
      <Card>
        <p>{cardsDataProps.cardTitle}</p>
      </Card>
    </>
  )
}