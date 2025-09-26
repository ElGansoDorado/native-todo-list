import { RequestTodo, Todo } from './model/todo.type';

const BASE_URL = 'https://native-todo-list.onrender.com/api/todos';

export const getTodos = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      console.log(response.statusText);
    }

    const todos: Todo[] = await response.json();
    return todos;
  } catch (e) {
    console.error(e);
  }
};

export const getTodo = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      console.log(response.statusText);
    }

    const todos: Todo = await response.json();
    return todos;
  } catch (e) {
    console.error(e);
  }
};

export const addTodo = async (reqTodo: RequestTodo) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(reqTodo),
    });

    if (!response.ok) {
      console.log(response.statusText);
    }

    const todos: Todo = await response.json();
    return todos;
  } catch (e) {
    console.error(e);
  }
};

export const updateTodo = async (reqTodo: Todo) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'PUT',
    });

    if (!response.ok) {
      console.log(response.statusText);
    }

    const todos: Todo = await response.json();
    return todos;
  } catch (e) {
    console.error(e);
  }
};

export const deleteTodo = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.log(response.statusText);
    }

    const todos: Todo = await response.json();
    return todos;
  } catch (e) {
    console.error(e);
  }
};
