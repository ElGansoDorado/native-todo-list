import {
  Button,
  Form,
  Input,
  Provider,
  Flex as Row,
  Switch,
} from '@ant-design/react-native';
import React from 'react';
import { ScrollView } from 'react-native';

const Col = Row.Item;

interface FormValues {
  title?: string;
  desc?: boolean;
  gender?: number;
  phone?: string;
}

interface FormError {
  values: FormValues;
  errorFields: {
    name: (string | number)[];
    errors: string[];
  }[];
  outOfDate: boolean;
}

function ModalForm() {
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

  return (
    <Provider>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Form
          name="basic"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            title: '',
            phoneNumber: '',
            isDefault: false,
          }}
          renderHeader="горизонтальное меню"
        >
          <Form.Item name="title">
            <Input placeholder="Введите название таска..." />
          </Form.Item>

          <Form.Item
            label="установить по умолчанию"
            name="isDefault"
            wrapperStyle={{ alignItems: 'flex-end' }}
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item>
            <Row>
              <Col style={{ marginRight: 10 }}>
                <Button onPress={() => form.resetFields()}>Отмена</Button>
              </Col>
              <Col>
                <Button type="primary" onPress={onSubmit}>
                  Создать
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </ScrollView>
    </Provider>
  );
}

export default ModalForm;
