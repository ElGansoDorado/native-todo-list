import {
  RequestTodo,
  TodoFormError,
  TodoFormInitValues,
} from '@/shared/model/todo.type';
import {
  View,
  Button,
  Form,
  Input,
  Picker,
  Provider,
  List,
  Flex as Row,
} from '@ant-design/react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './style';

const Col = Row.Item;

type ModalFormProps = {
  onFinish: (value: RequestTodo) => void;
  onFinishFailed?: (errorInfo: TodoFormError) => void;
  onCancel: () => void;
  initValues: TodoFormInitValues;
};

function ModalForm({
  onFinish,
  onFinishFailed,
  onCancel,
  initValues,
}: ModalFormProps) {
  const [form] = Form.useForm();

  const { TextArea } = Input;

  const onSubmit = () => {
    form.submit();
  };

  const status = [
    { label: 'available', value: 'available' },
    { label: 'active', value: 'active' },
    { label: 'cancel', value: 'cancel' },
    { label: 'done', value: 'done' },
  ];

  return (
    <Provider>
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
        >
          <Form
            name="basic"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={initValues}
            style={styles.form}
          >
            <Form.Item name="title">
              <Input placeholder="Введите название таска..." />
            </Form.Item>

            <Form.Item name="description">
              <TextArea
                placeholder="Autosize height with minimum and maximum number of lines"
                autoSize={{ minRows: 6, maxRows: 6 }}
              />
            </Form.Item>

            <Form.Item name="status">
              <Picker
                data={status}
                cols={1}
                okText="Готово"
                dismissText="Отмена"
              >
                <List.Item arrow="horizontal">выберите статус</List.Item>
              </Picker>
            </Form.Item>
          </Form>
        </ScrollView>

        <View style={styles.footer}>
          <Row>
            <Col style={{ marginRight: 10, flex: 1 }}>
              <Button onPress={onCancel}>Отменить</Button>
            </Col>
            <Col style={{ flex: 1 }}>
              <Button type="primary" onPress={onSubmit}>
                Принять
              </Button>
            </Col>
          </Row>
        </View>
      </View>
    </Provider>
  );
}

export default ModalForm;
