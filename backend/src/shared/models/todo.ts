export type Status = 'available' | 'active' | 'cancel' | 'done';

export type Todo = {
  _id: string;
  title: string;
  description: string;
  status: Status;
  dateCreate: Date;
};

export type RequestTodo = {
  title: string;
  description: string;
  status: Status;
};

export const mocksTodos: RequestTodo[] = [
  {
    title: 'Изучить TypeScript',
    description: 'Освоить основы TypeScript и типизацию',
    status: 'done',
  },
  {
    title: 'Настроить Express сервер',
    description: 'Создать базовый сервер на Express.js',
    status: 'active',
  },
  {
    title: 'Подключить MongoDB',
    description: 'Настроить подключение к базе данных MongoDB',
    status: 'active',
  },
  {
    title: 'Создать API для задач',
    description: 'Реализовать CRUD операции для Todo',
    status: 'available',
  },
  {
    title: 'Отмена проекта',
    description: 'Проект был отменен по техническим причинам',
    status: 'cancel',
  },
];
