import {
  Button,
  Card,
  Text,
  View,
  Flex as Row,
} from '@ant-design/react-native';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { Todo } from '@/shared/model/todo.type';
import { StyleSheet } from 'react-native';

type TodoCardProps = {
  todo: Todo;
  removeTodo: (_id: string) => void;
};

function ListCard({ todo, removeTodo }: TodoCardProps) {
  const date = new Date(todo.dateCreate).toISOString().split('T')[0];

  const CardMenu = () => {
    return (
      <Row style={styles.row}>
        <Button
          type="warning"
          size="small"
          onPress={() => removeTodo(todo._id)}
        >
          <DeleteOutlined />
        </Button>
        <Button
          type="primary"
          size="small"
          onPress={() => removeTodo(todo._id)}
        >
          <FormOutlined />
        </Button>
      </Row>
    );
  };

  return (
    <Card>
      <Card.Header title={todo.title} extra={todo.status} />
      <Card.Body>
        <Text>{todo.description}</Text>
      </Card.Body>
      <Card.Footer content={date} extra={<CardMenu />} />
    </Card>
  );
}

export default ListCard;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'flex-end',
    gap: 6,
  },
});
