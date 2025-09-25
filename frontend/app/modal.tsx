import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

import { InputItem, Picker, TextareaItem, Text } from '@ant-design/react-native';

export default function ModalScreen() {
  const statusData = [
    { label: 'К выполнению', value: 'pending' },
    { label: 'В процессе', value: 'in-progress' },
    { label: 'Выполнено', value: 'completed' },
    { label: 'Отложено', value: 'on-hold' }
  ];

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Создать новый туду</ThemedText>

      <InputItem
        clear
        placeholder="Введите название задачи"
        labelNumber={5}
      >
        Название:
      </InputItem>

      <TextareaItem
        placeholder="Опишите детали задачи..."
        rows={4}
        count={500}
        style={styles.textarea}
      />

      <Picker
        data={statusData}
        cols={1}
        style={styles.picker}
      >
        <Text style={styles.pickerLabel}>Статус:</Text>
      </Picker>

      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Вернуться назад</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 6,
    paddingHorizontal: 12,
  },
  pickerLabel: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
  },
});
