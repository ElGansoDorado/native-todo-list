import { RequestTodo, Status } from '@/shared/model/todo.type';
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
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const Col = Row.Item;

type FormValues = Partial<RequestTodo>;

interface FormError {
  values: FormValues;
  errorFields: {
    name: (string | number)[];
    errors: string[];
  }[];
  outOfDate: boolean;
}

function ModalForm() {
  const router = useRouter();
  const [form] = Form.useForm();

  const onSubmit = () => {
    form.submit();
  };

  const onFinish = (values: FormValues) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: FormError) => {
    console.log('Failed:', errorInfo);
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
            initialValues={{
              title: '',
              description: '',
              status: ['available'],
            }}
            style={styles.form}
          >
            <Form.Item name="title">
              <Input placeholder="Введите название таска..." />
            </Form.Item>

            <Form.Item name="description">
              <Input
                placeholder="Enter a description of your task..."
                maxLength={200}
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
              <Button onPress={() => router.back()}>Отменить</Button>
            </Col>
            <Col style={{ flex: 1 }}>
              <Button type="primary" onPress={onSubmit}>
                Добавить
              </Button>
            </Col>
          </Row>
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  form: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: '#ffffff',
    margin: 16,
    marginBottom: 0,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default ModalForm;
