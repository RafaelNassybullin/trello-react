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
        cardComment: ['комментарий-1', 'комментарий-2'],
        modalOpen: false
      },
      {
        id: 'card-1-2',
        cardTitle: 'Послушать музыку',
        cardDescription: 'Описание',
        cardComment: ['комментарий-1', 'комментарий-2'],
        modalOpen: false
      },
      {
        id: 'card-1-3',
        cardTitle: 'Залить проект на гитхаб',
        cardDescription: 'Описание',
        cardComment: ['комментарий-1fbgb', 'комментарий-2fgbfg'],
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
        cardComment: ['комментарий-9', 'комментарий-12'],
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
        cardComment: ['комментарий-1', 'комментарий-2'],
        modalOpen: false
      },
      {
        id: 'card-3-2',
        cardTitle: 'Типы в Styled-Componens?',
        cardDescription: 'Описание',
        cardComment: ['комментарий-1', 'комментарий-2'],
        modalOpen: false
      }
    ]
  },
]
