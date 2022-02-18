import {IData} from "../types";

export const listsData: IData[] = [
  {
    id: 'list-1',
    listTitle: 'TODO',
    cards: [
      {
        id: 'card-1-1',
        cardTitle: 'Приготовить ужин',
        cardDescription: 'Описание',
        cardComment: 'Комментарий'
      },
      {
        id: 'card-1-2',
        cardTitle: 'Послушать музыку',
        cardDescription: 'Описание',
        cardComment: 'Комментарий'
      },
      {
        id: 'card-1-3',
        cardTitle: 'Залить проект на гитхаб',
        cardDescription: 'Описание',
        cardComment: 'Комментарий'
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
        cardComment: 'Комментарий'
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
        cardComment: 'Комментарий'
      },
      {
        id: 'card-3-2',
        cardTitle: 'Типы в Styled-Componens?',
        cardDescription: 'Описание',
        cardComment: 'Комментарий'
      }
    ]
  },
]
