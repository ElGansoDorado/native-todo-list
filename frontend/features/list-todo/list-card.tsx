import { Card, Text } from '@ant-design/react-native';
import { Todo } from '@/shared/model/todo.type';

function ListCard({ todo }: { todo: Todo }) {
  return (
    <Card>
      <Card.Header title={todo.title} extra={todo.status} />
      <Card.Body>
        <Text>{todo.description}</Text>
      </Card.Body>
      <Card.Footer content={`${todo.dateCreate}`} />
    </Card>
  );
}

export default ListCard;
