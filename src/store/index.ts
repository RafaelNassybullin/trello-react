import {IData} from "../interfaces";

export let listsData: IData[] = [
  {
    id: 'list-1',
    listTitle: 'TODO',
    cards: [
      {
        id: 'cards-1-1',
        cardTitle: 'Приготовить ужин',
        cardDescription: 'Описание',
        cardComment: [
          {
            id:'cards-1-comment-1',
            commentText:'текст коммент-1'
          },
          {
            id:'cards-1-comment-2',
            commentText:'текст коммент-2'
          },
          {
            id:'cards-1-comment-3',
            commentText:'текст коммент-3'
          }
        ],
        modalOpen: false
      },
      {
        id: 'cards-1-2',
        cardTitle: 'Послушать музыку',
        cardDescription: 'Описание',
        cardComment: [
          {
            id:'cards-1-2comment-1',
            commentText:'текст коммент-777'
          },
          {
            id:'cards-1-2comment-2',
            commentText:'текст коммент-888'
          },
          {
            id:'cards-1-2comment-3',
            commentText:'текст коммент-999'
          }
        ],
        modalOpen: false
      },
      {
        id: 'cards-1-3',
        cardTitle: 'Залить проект на гитхаб',
        cardDescription: 'Описание',
        cardComment: [
          {
            id:'cards-1-3comment-1',
            commentText:'текст коммент-1'
          },
          {
            id:'cards-1-3comment-2',
            commentText:'текст коммент-2'
          },
          {
            id:'cards-1-3comment-3',
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
        id: 'cards-2-1',
        cardTitle: 'Программирование',
        cardDescription: 'Описание',
        cardComment: [
          {
            id:'cards-2-1comment-1',
            commentText:'текст коммент-1'
          },
          {
            id:'cards-2-1comment-2',
            commentText:'текст коммент-2'
          },
          {
            id:'cards-2-1comment-3',
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
        id: 'cards-3-1',
        cardTitle: 'Redux-Saga',
        cardDescription: 'Описание',
        cardComment: [
          {
            id:'cards-3-1comment-1',
            commentText:'текст коммент-1'
          },
          {
            id:'cards-3-1comment-2',
            commentText:'текст коммент-2'
          },
          {
            id:'cards-3-1comment-3',
            commentText:'текст коммент-3'
          }
        ],
        modalOpen: false
      },
      {
        id: 'cards-3-2',
        cardTitle: 'Типы в Styled-Componens?',
        cardDescription: 'Описание',
        cardComment: [
          {
            id:'cards-3-2comment-1',
            commentText:'текст коммент-1'
          },
          {
            id:'cards-3-2comment-2',
            commentText:'текст коммент-2'
          },
          {
            id:'cards-3-2comment-3',
            commentText:'текст коммент-3'
          }
        ],
        modalOpen: false
      }
    ]
  },
]

if(localStorage.getItem('localData')||''===null){
  listsData = JSON.parse(localStorage.getItem('localData')||'')
}