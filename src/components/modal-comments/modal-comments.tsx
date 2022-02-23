import React, {FC, useContext, useState} from 'react';
import {ICards, IComment, IData} from "../../interfaces";
import {v4 as uuidv4} from "uuid";
import styled from "styled-components";
import {DataContext} from "../../context/DataContext";

interface props {
  commentsCardProps: ICards
  commentsListProps: IData
}

export const ModalComments: FC<props> = ({commentsCardProps, commentsListProps}) => {
  const {
    removeComment,
    addComment,
  } = useContext(DataContext);

  const [addCommentOpen, setAddCommentOpen] = useState(false);
  const [commentValue, setCommentValue] = useState('');


  const addCommentsHandler = (el: IComment) => {
    setAddCommentOpen(!addCommentOpen)
    removeComment(el, commentsListProps, commentsCardProps)
    setCommentValue('')
  }

  const addCommenHandler = () => {
    setAddCommentOpen(!addCommentOpen)
    if (commentValue) {
      addComment({
        id: uuidv4(),
        commentText: commentValue
      }, commentsListProps, commentsCardProps)
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
        {commentsCardProps.cardComment.map((el: IComment) =>

        <CommentsItems key={uuidv4()}>

          <CommentTitle>{el.commentText}</CommentTitle>

          <RemoveComment onClick={() => addCommentsHandler(el)}>X</RemoveComment>

        </CommentsItems>

      )}
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
  height: 30px;
  outline: none;
  border-radius: 3px;
  padding: 0 10px;
  border: 2px solid #CCCCCC;

  &:focus {
    border: 2px solid palegreen;
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
  background: tomato;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  outline: none;
  border: none;
  cursor: pointer;
`

const AddComment = styled.button`
  outline: none;
  background: tomato;
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
  background-color: tomato;
  border-radius: 15px;
}
  
`