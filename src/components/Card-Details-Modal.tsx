import React, {FC, useContext} from 'react';
import {ModalPopup} from "./Modal-Popup";
import {ICards, IData} from "../interfaces";
import styled from "styled-components";
import {v4 as uuidv4} from "uuid";
import {DataContext} from "../context/DataContext";

interface props {
  h: IData
  c: ICards
  lkl: boolean
}

export const CardDetailsModal: FC<props> = ({h, c, lkl}) => {
  const {openModal} = useContext(DataContext);

  const closeHandler = () => {
    openModal(c, false)
  }


  return (
    <>
      {c.modalOpen && <ModalPopup>
        <ModalInner>
          <ModalTitle>Author Rafael, list name: {h.listTitle}</ModalTitle>
          <ModalClose onClick={closeHandler}/>
          <ModalCard>
            <ModalCardName>
              <h3>Card name: {c.cardTitle}</h3>
              <p>Card</p>
            </ModalCardName>
            <ModalCardDescription>
              <h3>Description</h3>
              <p>Card description</p>
            </ModalCardDescription>
          </ModalCard>
          <Comments>
            <h3>Comments</h3>
            {c.cardComment.map(el =>
              <CommentsItems key={uuidv4()}>
                {el}
              </CommentsItems>
            )}
          </Comments>
          <DeleteCard>
            del
          </DeleteCard>
        </ModalInner>
      </ModalPopup>}
    </>
  )
}

const ModalInner = styled.div`
width: 600px;
height: 500px;
background: white;
color: black;
position: relative;
`
const ModalClose = styled.div`
position: absolute;
top: -3px;
right: -12px;
width: 26px;
height: 26px;
background: #DB5A4C;
border-radius: 50%;
display: grid;
place-items: center;
cursor: pointer;

&:hover
{
  background: rgba(219, 90, 76, 0.91);
}
`
const ModalTitle = styled.h4`
display: flex;
align-items: center;
font-size: 28px;
`
const Comments = styled.div`
`
const ModalCard = styled.div`

`
const ModalCardName = styled.div`

`
const ModalCardDescription = styled.div`

`
const CommentsItems = styled.div`

`
const DeleteCard = styled.div`
position: absolute;
bottom: 0;
right: 0;
width: 30px;
height: 30px;
background: crimson;
color: white;
display: grid;
place-items: center;
cursor: pointer;
`