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
