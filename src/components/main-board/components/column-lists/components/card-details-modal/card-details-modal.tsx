import React, {FC, useContext} from 'react';
import {ModalPopup} from "components/modal-popup";
import {ICards, IColumns} from "interfaces";
import styled from "styled-components";
import {DataContext} from "context/DataContext";
import {ModalCardNames} from "components/main-board/components/column-lists/components/card-details-modal/components";
import {ModalCardDescriptions} from "components/main-board/components/column-lists/components/card-details-modal/components";
import {ModalComments} from "components/main-board/components/column-lists/components/card-details-modal/components";
import {RemoveCard} from "components/main-board/components/column-lists/components/card-details-modal/components";
import {IconClose} from "assets/icon-components/icon-close";
import {v4 as uuidv4} from 'uuid';

export const CardDetailsModal: FC = () => {
  const {openModal, closeModal, dataState} = useContext(DataContext);
  const {modalCardID, cards, columns} = dataState
  let listName:string = ''

  const closeHandler = () => {
    closeModal()
  }

  return (
    <>
      {modalCardID && <ModalPopup>
        {cards.map(el => {
          if (el.id === modalCardID) {
            {columns.filter(col=>col.id === el.columnID ? listName = col.listTitle : null)}
            return (
              <ModalInner key={uuidv4()}>
                <ModalTitle>
                  <div>Author: <span>{localStorage.getItem('name')}</span></div>
                  <div>list name: <span>{listName}</span></div>
                </ModalTitle>
                <ModalClose onClick={closeHandler}>
                  <IconClose/>
                </ModalClose>
                <ModalCard>
                  <ModalCardNames modalTitleCardData={el}/>
                  <ModalCardDescriptions modalDescriptionCardData={el}/>
                  <ModalComments commentsCardProps={el}/>
                </ModalCard>
                <RemoveCard cardData={el}/>
              </ModalInner>
            )}})}
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
const ModalTitle = styled.div`
  font-size: 20px;

  span {
    font-weight: 700;
    font-size: 19px;
  }
`
const ModalClose = styled.div`
  position: absolute;
  top: -3px;
  right: -12px;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #CCCCCC3d;
  }
`
const ModalCard = styled.div`

`