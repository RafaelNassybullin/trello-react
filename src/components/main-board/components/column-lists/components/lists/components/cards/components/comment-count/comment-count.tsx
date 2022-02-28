import React, {FC, useContext, useState} from 'react';
import {IconComments} from "assets/icon-components/icon-comments";
import styled from "styled-components";
import {IComment} from "interfaces";
import {DataContext} from "context/DataContext";

interface props {
  cardIdProp: string
}

export const CommentCount: FC<props> = ({cardIdProp}) => {
  const {dataState} = useContext(DataContext);
  const [commentCount, setCommentCount] = useState()
  const {comments} = dataState


  return (
    <CommentCountStyle>
      <IconComments/>
      <p>{2}</p>
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