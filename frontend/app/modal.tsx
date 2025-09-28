import React from 'react';
import { ModalForm } from '@/features/modal-todo';
import { useAddTodo } from '@/shared/api/queries';
import {
  RequestTodo,
  TodoFormError,
  TodoFormInitValues,
} from '@/shared/model/todo.type';
import { useRouter } from 'expo-router';

function ModalScreen() {
  const router = useRouter();
  const addMutation = useAddTodo();
  const initValues: TodoFormInitValues = {
    title: '',
    description: '',
    status: ['available'],
  };

  const onFinish = async (values: RequestTodo) => {
    const statusValue = Array.isArray(values.status)
      ? values.status[0]
      : values.status;

    const req: RequestTodo = {
      title: values.title ?? '',
      description: values.description ?? '',
      status: statusValue ?? 'available',
    };

    if (req.title) {
      addMutation.mutate(req);
      router.back();
    }
  };

  const onFinishFailed = (errorInfo: TodoFormError) => {
    console.log('Failed:', errorInfo);
  };

  const onCancel = () => {
    router.back();
  };

  return <ModalForm {...{ onFinish, onFinishFailed, onCancel, initValues }} />;
}

export default ModalScreen;
