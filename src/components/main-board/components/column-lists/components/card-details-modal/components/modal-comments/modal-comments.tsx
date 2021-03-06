import React, {FC, useContext, useState} from 'react';
import {ICards, IComment, IColumns} from "interfaces";
import {v4 as uuidv4} from "uuid";
import styled from "styled-components";
import {DataContext} from "context/DataContext";

interface props {
  commentsCardProps: ICards
}

export const ModalComments: FC<props> = ({commentsCardProps}) => {
  const [addCommentOpen, setAddCommentOpen] = useState(false);
  const [commentValue, setCommentValue] = useState('');
  const {removeComment, addComment, dataState} = useContext(DataContext);
  const {comments} = dataState

  const removeHandler = (co: IComment) => {
    setAddCommentOpen(!addCommentOpen)
    removeComment(co)
    setCommentValue('')
  }
  const addCommenHandler = () => {
    setAddCommentOpen(!addCommentOpen)
    if (commentValue) {
      addComment({
        id: uuidv4(),
        cardID: commentsCardProps.id,
        commentText: commentValue
      })
    }
  }
  return (
    <Comments>
      <CommentsTitle>Comments</CommentsTitle>
      <CommentsAddWrap>
        <CommentsInput
          type="text"
          onChange={e => setCommentValue(e.target.value)}
          value={commentValue}
          placeholder={'comment'}
        />
        <AddComment onClick={addCommenHandler}>PUSH</AddComment>
      </CommentsAddWrap>
      <CommentsItemsWrap>
        {comments.map(co => {
          if (co.cardID === commentsCardProps.id) {
            return (
              <CommentsItems key={uuidv4()}>
                <CommentTitle>{co.commentText}</CommentTitle>
                <RemoveComment onClick={() => removeHandler(co)}>X</RemoveComment>
              </CommentsItems>
            )
          }
        })}
      </CommentsItemsWrap>
    </Comments>
  )
}

const Comments = styled.div`

`
const CommentsTitle = styled.h2`
  margin-bottom: 15px;
`
const CommentsAddWrap = styled.div`
  display: flex;
`
const CommentsInput = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 3px;
  padding: 0 10px;
  border: 2px solid #CCCCCC;
  font-size: 16px;

  &:focus {
    border: 2px solid gray;
  }
`
const CommentTitle = styled.div`
  width: 100%;
  height: 30px;
`
const CommentsItems = styled.div`
  display: flex;
  align-items: center;
  padding: 7px;
  height: 40px;
  background: #E3E4E6;
  border-radius: 3px;
  margin: 5px 0;
`
const RemoveComment = styled.button`
  background: #40E3B5;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover{
    background: crimson;
  }
`

const AddComment = styled.button`
  outline: none;
  background: #40E3B5;
  color: white;
  border: none;
  cursor: pointer;
  padding: 0 10px;
`
const CommentsItemsWrap = styled.div`
  height: 160px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    overflow-y: scroll;
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 15px;
  }

`