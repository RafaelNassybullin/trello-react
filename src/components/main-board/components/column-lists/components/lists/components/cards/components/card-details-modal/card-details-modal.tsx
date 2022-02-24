import React, {FC, useContext} from 'react';
import {ModalPopup} from "../../../../../../../../../modal-popup";
import {ICards, IData} from "../../../../../../../../../../interfaces";
import styled from "styled-components";
import {DataContext} from "../../../../../../../../../../context/DataContext";
import {ModalCardNames} from "./components";
import {ModalCardDescriptions} from "./components";
import {ModalComments} from "./components";
import {RemoveCard} from "./components";
import {CloseIcon} from "../../../../../../../../../../assets/icon-components/closeIcon";

interface props {
  listProps: IData
  cardProps: ICards
}

export const CardDetailsModal: FC<props> = ({listProps, cardProps}) => {
  const {openModal} = useContext(DataContext);

  const closeHandler = () => {
    openModal(cardProps, false)
  }

  return (
    <>
      {cardProps.modalOpen && <ModalPopup cardsData={cardProps}>

        <ModalInner>
          <ModalTitle>
            <div>Author: <span>{localStorage.getItem('name')}</span></div>
            <div>list name:<span>{listProps.listTitle}</span></div>
          </ModalTitle>

          <ModalClose onClick={closeHandler}>
            <CloseIcon/>
          </ModalClose>

          <ModalCard>
            <ModalCardNames modalTitleCardData={cardProps} modalTitleListData={listProps}/>
            <ModalCardDescriptions modalDescriptionCardData={cardProps} modalDescriptionListData={listProps}/>
            <ModalComments commentsCardProps={cardProps} commentsListProps={listProps}/>
          </ModalCard>

          <RemoveCard cardData={cardProps} listsData={listProps}/>
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