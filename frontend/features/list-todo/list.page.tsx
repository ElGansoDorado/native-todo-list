import { styles } from './style';

import React from 'react';
import { ScrollView, Text } from 'react-native';
import { View, Button } from '@ant-design/react-native';
import ListCard from './list-card';

import { useRouter } from 'expo-router';
import { useList } from './use-list';

function ListScreen() {
  const { data, loader } = useList();
  const router = useRouter();

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
          {loader ? (
            <View>Loader...</View>
          ) : (
            data?.map((item) => <ListCard key={item._id} todo={item} />)
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
