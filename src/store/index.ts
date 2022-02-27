import {ICards, IColumns, IComment} from "interfaces";

export const columns:IColumns[] = [
  {
    id:'columns-1',
    listTitle:'TODO',
    cards:[]
  },
  {
    id:'columns-2',
    listTitle:'In Process',
    cards:[]
  },
  {
    id:'columns-3',
    listTitle:'Testing',
    cards:[]
  },
  {
    id:'columns-4',
    listTitle:'Completed',
    cards:[]
  }
]

export const cards:ICards[] = [
  {
    id:'card-1',
    columnID:'columns-1',
    cardTitle:'Приготовить ужин',
    cardDescription:'Описание',
    modalOpen:false,
    cardComment:[]
  },
  {
    id:'card-2',
    columnID:'columns-2',
    cardTitle:'Карточкаа',
    cardDescription:'Описание',
    modalOpen:false,
    cardComment:[]
  },
  {
    id:'card-3',
    columnID:'columns-1',
    cardTitle:'карточка из 1 колонки',
    cardDescription:'Описание',
    modalOpen:false,
    cardComment:[]
  },
  {
    id:'card-4',
    columnID:'columns-2',
    cardTitle:'карточка из 2 колонки',
    cardDescription:'Описание',
    modalOpen:false,
    cardComment:[]
  },
  {
    id:'card-5',
    columnID:'columns-3',
    cardTitle:'карточка из 3 колонки',
    cardDescription:'Описание',
    modalOpen:false,
    cardComment:[]
  },
  {
    id:'card-6',
    columnID:'columns-4',
    cardTitle:'карточка из 4 колонки',
    cardDescription:'Описание',
    modalOpen:false,
    cardComment:[]
  },
]

export const comments:IComment[] = [
  {
    id: 'comment-1',
    cardID: 'card-1',
    commentText:'Коментарий'
  },
  {
    id: 'comment-2',
    cardID: 'card-4',
    commentText:'Коментарий'
  }
]