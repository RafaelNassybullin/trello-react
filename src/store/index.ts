import {IData} from "../interfaces";

export const listsData: IData[] = [
  {
    id: 'list-1',
    listTitle: 'TODO',
    cards: [
      {
        id: 'card-1-1',
        cardTitle: 'Приготовить ужин',
        cardDescription: 'Описание',
        cardComment: [
          {
            id:'card-1-comment-1',
            commentText:'текст коммент-1'
          },
          {
            id:'card-1-comment-2',
            commentText:'текст коммент-2'
          },
          {
            id:'card-1-comment-3',
            commentText:'текст коммент-3'
          }
        ],
        modalOpen: false
      },
      {
        id: 'card-1-2',
        cardTitle: 'Послушать музыку',
        cardDescription: 'Описание',
        cardComment: [
          {
            id:'card-1-2comment-1',
            commentText:'текст коммент-777'
          },
          {
            id:'card-1-2comment-2',
            commentText:'текст коммент-888'
          },
          {
            id:'card-1-2comment-3',
            commentText:'текст коммент-999'
          }
        ],
        modalOpen: false
      },
      {
        id: 'card-1-3',
        cardTitle: 'Залить проект на гитхаб',
        cardDescription: 'Описание',
        cardComment: [
          {
            id:'card-1-3comment-1',
            commentText:'текст коммент-1'
          },
          {
            id:'card-1-3comment-2',
            commentText:'текст коммент-2'
          },
          {
            id:'card-1-3comment-3',
            commentText:'текст коммент-3'
          }
        ],
        modalOpen: false
      }
    ]
  },
  {
    id: 'list-2',
    listTitle: 'In Progress',
    cards: [
      {
        id: 'card-2-1',
        cardTitle: 'Программирование',
        cardDescription: 'Описание',
        cardComment: [
          {
            id:'card-2-1comment-1',
            commentText:'текст коммент-1'
          },
          {
            id:'card-2-1comment-2',
            commentText:'текст коммент-2'
          },
          {
            id:'card-2-1comment-3',
            commentText:'текст коммент-3'
          }
        ],
        modalOpen: false
      }
    ]
  },
  {
    id: 'list-3',
    listTitle: 'Testing',
    cards: [
      {
        id: 'card-3-1',
        cardTitle: 'Redux-Saga',
        cardDescription: 'Описание',
        cardComment: [
          {
            id:'card-3-1comment-1',
            commentText:'текст коммент-1'
          },
          {
            id:'card-3-1comment-2',
            commentText:'текст коммент-2'
          },
          {
            id:'card-3-1comment-3',
            commentText:'текст коммент-3'
          }
        ],
        modalOpen: false
      },
      {
        id: 'card-3-2',
        cardTitle: 'Типы в Styled-Componens?',
        cardDescription: 'Описание',
        cardComment: [
          {
            id:'card-3-2comment-1',
            commentText:'текст коммент-1'
          },
          {
            id:'card-3-2comment-2',
            commentText:'текст коммент-2'
          },
          {
            id:'card-3-2comment-3',
            commentText:'текст коммент-3'
          }
        ],
        modalOpen: false
      }
    ]
  },
]
