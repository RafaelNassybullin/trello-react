import React, {FC, useContext} from 'react';
import {ModalPopup} from "../modal-popup";
import {ICards, IData} from "../../interfaces";
import styled from "styled-components";
import {DataContext} from "../../context/DataContext";
import {ModalCardNames} from "../modal-card-names";
import {ModalCardDescriptions} from "../modal-card-descriptions";
import {ModalComments} from "../modal-comments";

interface props {
  listProps: IData
  cardProps: ICards
}

export const CardDetailsModal: FC<props> = ({listProps, cardProps}) => {

  const {openModal, removeCard} = useContext(DataContext);

  const closeHandler = () => {
    openModal(cardProps, false)
  }

  const removeCardHandler = () => {
    removeCard(cardProps)
  }

  return (
    <>
      {cardProps.modalOpen && <ModalPopup>
        <ModalInner>
          <ModalTitle>Author Rafael, list name: {listProps.listTitle}</ModalTitle>

          <ModalClose onClick={closeHandler}/>

          <ModalCard>

            <ModalCardNames
              modalTitleCardData={cardProps}
              modalTitleListData={listProps}
            />
            <ModalCardDescriptions
              modalDescriptionCardData={cardProps}
              modalDescriptionListData={listProps}
            />

            <ModalComments
              commentsCardProps={cardProps}
              commentsListProps={listProps}
            />

          </ModalCard>

          <DeleteCard onClick={removeCardHandler}>
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

  &:hover {
    background: rgba(219, 90, 76, 0.91);
  }
`
const ModalTitle = styled.h4`
  display: flex;
  align-items: center;
  font-size: 28px;
`
const ModalCard = styled.div`

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