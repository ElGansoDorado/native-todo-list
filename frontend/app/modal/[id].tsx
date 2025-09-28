import { ModalForm } from '@/features/modal-todo';
import { useOneTodo, useUpdateTodo } from '@/shared/api/queries';
import {
  RequestTodo,
  Todo,
  TodoFormError,
  TodoFormInitValues,
} from '@/shared/model/todo.type';
import { View } from '@ant-design/react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

function ModalScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const updateMutation = useUpdateTodo();
  const { data, isLoading } = useOneTodo(Array.isArray(id) ? id[0] : id);

  const initValues: TodoFormInitValues = {
    title: data?.title ?? '',
    description: data?.description ?? '',
    status: [data?.status ?? 'available'],
  };

  const onFinish = async (values: RequestTodo) => {
    const statusValue = Array.isArray(values.status)
      ? values.status[0]
      : values.status;

    const req: Todo = {
      _id: data?._id ?? '',
      title: values.title ?? '',
      description: values.description ?? '',
      status: statusValue ?? 'available',
      dateCreate: data?.dateCreate ?? new Date(),
    };

    console.log(req);

    if (req.title) {
      updateMutation.mutate(req);
      router.back();
    }
  };

  const onFinishFailed = (errorInfo: TodoFormError) => {
    console.log('Failed:', errorInfo);
  };

  const onCancel = () => {
    router.push('/');
  };

  if (isLoading) return <View>Loading...</View>;

  return <ModalForm {...{ onFinish, onFinishFailed, onCancel, initValues }} />;
}

export default ModalScreen;
