import React, {FC, useContext, useState} from 'react';
import {IconComments} from "assets/icon-components/icon-comments";
import styled from "styled-components";
import {ICards, IComment} from "interfaces";
import {DataContext} from "context/DataContext";

interface props {
  cardProp: ICards
}

export const CommentCount: FC<props> = ({cardProp}) => {
  const {dataState} = useContext(DataContext);
  const [commentCount, setCommentCount] = useState()
  const {comments} = dataState
  const count:IComment[] = []
  comments.filter(co => co.cardID===cardProp.id && count.push(co))

  return (
    <CommentCountStyle>
      <IconComments/>
      <p>{count.length}</p>
    </CommentCountStyle>
  )
}

const CommentCountStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 35px;
  height: 20px;

  svg {
    fill: gray;
  }
`