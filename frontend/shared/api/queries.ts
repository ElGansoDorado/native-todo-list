import { addTodo, getTodo, updateTodo } from '@/shared/api/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const KEY_QUERY = ['todos'];

export const useOneTodo = (_id: string) => {
  const query = useQuery({
    queryKey: ['todos', _id],
    queryFn: () => getTodo(_id),
  });

  return query;
};

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: KEY_QUERY,
      });
    },
  });
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: KEY_QUERY,
      });
    },
  });
};
