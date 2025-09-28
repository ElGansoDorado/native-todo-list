import { styles } from './style';

import React from 'react';
import { ScrollView, Text } from 'react-native';
import { View, Button } from '@ant-design/react-native';
import ListCard from './components/todo-card';

import { useRouter } from 'expo-router';
import { useListTodo, useDeleteTodo } from './queries';

function ListScreen() {
  const { data, isLoading } = useListTodo();
  const deleteMutation = useDeleteTodo();

  const router = useRouter();

  const openModal = () => {
    router.push('/modal');
  };

  const editTodo = (_id: string) => {
    router.push(`/modal/${_id}`);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>Мои задачи</Text>
        <Text style={styles.subtitle}>Здесь будет список созданных задач</Text>

        <View style={styles.taskList}>
          {isLoading ? (
            <View>Loader...</View>
          ) : (
            data?.map((item) => (
              <ListCard
                key={item._id}
                todo={item}
                removeTodo={() => deleteMutation.mutate(item._id)}
                editTodo={() => editTodo(item._id)}
              />
            ))
          )}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button onPress={openModal} type="primary">
          + Создать задачу
        </Button>
      </View>
    </View>
  );
}

export default ListScreen;
