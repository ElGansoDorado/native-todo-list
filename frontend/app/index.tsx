import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function MainScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Список всех тудушек</ThemedText>


      <Link href="/modal" dismissTo style={styles.link}>
        <ThemedText type="link">Создать тудушку</ThemedText>
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
});
