import React, {FC, useContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {ICards, IData} from "../interfaces";
import styled from "styled-components";
import {CardDetailsModal} from "./Card-Details-Modal";
import {DataContext} from "../context/DataContext";

interface props {
  cardsDataProps: IData
}

export const Cards: FC<props> = ({cardsDataProps}) => {
  const [state, setState] = useState<boolean>(false)
  const {openModal} = useContext(DataContext);

  const handleCard = (el:ICards, cardsDataProps:IData) => {
    setState(!state)
    openModal(el, true)
  }

  return (
    <>
      {
        cardsDataProps.cards.map((el: ICards) => (
          <React.Fragment key={uuidv4()}>
            <Card onClick={()=>handleCard(el, cardsDataProps)}>
              <CardText>{el.cardTitle}</CardText>
            </Card>

           <CardDetailsModal
             lkl={state}
              c={el}
              h={cardsDataProps}/>
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

  &:hover {
    background: #40E3B5;
    color: white;
  }
`
const CardText = styled.p`

`