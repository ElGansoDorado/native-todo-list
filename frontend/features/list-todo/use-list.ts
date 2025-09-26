import { getTodos } from '@/shared/api';
import { Todo } from '@/shared/model/todo.type';
import { useEffect, useState } from 'react';

export const useList = () => {
  const [data, setData] = useState<Todo[]>();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fechTodo = async () => {
      setLoader(true);
      setData(await getTodos());
      setLoader(false);
    };

    fechTodo();
  }, []);

  return { data, loader };
};
