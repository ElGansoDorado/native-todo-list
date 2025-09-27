import { getTodos, deleteTodo } from '@/shared/api';
import { Todo } from '@/shared/model/todo.type';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const KEY_QUERY = ['todos'];

export const useListTodo = () => {
  const query = useQuery({
    queryKey: KEY_QUERY,
    queryFn: getTodos,
  });

  return query;
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onMutate: async (deletedId: string) => {
      await queryClient.cancelQueries({ queryKey: KEY_QUERY });

      const previousTodos = queryClient.getQueryData<Todo[]>(KEY_QUERY) || [];

      queryClient.setQueryData(KEY_QUERY, (old: Todo[] = []) =>
        old.filter((todo) => todo._id !== deletedId)
      );

      return { previousTodos, deletedId };
    },
    onError: (err, _, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(KEY_QUERY, context.previousTodos);
      }
      console.error('Ошибка удаления:', err);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: KEY_QUERY });
    },
  });
};
