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

export type TodoFormInitValues = Omit<RequestTodo, 'status'> & {
  status: Status[];
};

export type TodoFormError = {
  values: RequestTodo;
  errorFields: {
    name: (string | number)[];
    errors: string[];
  }[];
  outOfDate: boolean;
};
