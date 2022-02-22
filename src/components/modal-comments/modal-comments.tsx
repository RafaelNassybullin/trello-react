import React, {FC, useContext, useState} from 'react';
import {ICards, IComment, IData} from "../../interfaces";
import {v4 as uuidv4} from "uuid";
import styled from "styled-components";
import {DataContext} from "../../context/DataContext";

interface props {
  commentsCardProps:ICards
  commentsListProps:IData
}
export const ModalComments:FC<props> = ({commentsCardProps, commentsListProps}) => {
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
        id: 'card-2-1comment-1',
        commentText: commentValue
      }, commentsListProps, commentsCardProps)
    }
  }


    return (
        <Comments>
            <div>
              <h3>Comments</h3>
              <div onClick={addCommenHandler}>добавить</div>
              {addCommentOpen &&
              <input
                type="text"
                onChange={e => setCommentValue(e.target.value)}
                onBlur={addCommenHandler} autoFocus
                value={commentValue}/>}
            </div>
            {commentsCardProps.cardComment.map((el: IComment) =>
              <CommentsItems key={uuidv4()}>
                <p>{el.commentText}</p>
                <div onClick={() => addCommentsHandler(el)}>удалить</div>
              </CommentsItems>
            )}
          </Comments>
    )
}

const Comments = styled.div`
  div {
    display: flex;

  }

`
const CommentsItems = styled.div`
  display: flex;

  div {
    cursor: pointer;

    &:hover {
      color: crimson;
    }
  }
`