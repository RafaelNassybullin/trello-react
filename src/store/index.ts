import { IData } from "../types";

export const listsData: IData[] = [
  {
    id: '1',
    listTitle: 'TODO',
    cards: [
      {
        id: '11',
        cardTitle: 'Приготовить ужин',
        cardDescription: 'Описание',
        cardComment: 'Комментарий'
      },
      {
        id: '22',
        cardTitle: 'Послушать музыку',
        cardDescription: 'Описание',
        cardComment: 'Комментарий'
      },
      {
        id: '22',
        cardTitle: 'Залить проект на гитхаб',
        cardDescription: 'Описание',
        cardComment: 'Комментарий'
      }
    ]
  },
  {
    id: '2',
    listTitle: 'In Progress',
    cards: [
      {
        id: '22',
        cardTitle: 'Программирование',
        cardDescription: 'Описание',
        cardComment: 'Комментарий'
      }
    ]
  },
  {
    id: '33',
    listTitle: 'Testing',
    cards: [
      {
        id: '33',
        cardTitle: 'Redux-Saga',
        cardDescription: 'Описание',
        cardComment: 'Комментарий'
      },
      {
        id: '33',
        cardTitle: 'Типы в Styled-Componens?',
        cardDescription: 'Описание',
        cardComment: 'Комментарий'
      }
    ]
  },
]
