import { styles } from './style';

import React from 'react';
import { ScrollView, Text } from 'react-native';
import { View, Button, Flex } from '@ant-design/react-native';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { Todo } from '@/shared/model/todo.type';
import { getTodos } from '@/shared/api'; 

function ListScreen() {
  const router = useRouter();
  const [data, setData] = useState<Todo[]>()

  useEffect(() => {
    const fechTodo = async () => {
      setData(await getTodos());
    }

    fechTodo();
  }, []);

  const openModal = () => {
    router.push('/modal');
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
          {data?.map((item) => <Flex key={item._id}>
            <Text>{item.title}</Text>
            <Text>{item.status}</Text>  
          </Flex>)}
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
