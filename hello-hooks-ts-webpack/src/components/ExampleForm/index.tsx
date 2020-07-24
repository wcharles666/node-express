import React, { useState, useImperativeHandle, forwardRef, useRef } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import classNames from 'classnames';
import './index.less';

const defalutFormData = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  name: 'control-hooks',
  initialValues: { remember: true },
};

const defalutFormItemDataArr = [
  {
    label: 'Username',
    colon: true,
    name: 'username',
    rules: [{ required: true, message: 'Please input your username!' }],
  },
  {
    label: 'Password',
    colon: true,
    name: 'password',
    rules: [{ required: true, message: 'Please input your password!' }],
  },
  {
    name: 'remember',
    layout: { wrapperCol: { offset: 8, span: 16 } },
    children: Checkbox,
    valuePropName: 'checked',
  },
];

interface ExampleFormProps {
  onFinish: ({}) => void;
  onFinishFailed: ({}) => void;
  formData: Object;
  formItemData: Array;
  formlayout: object;
  name: string;
}

const ExampleForm = (props: ExampleFormProps, ref) => {
  const [form] = Form.useForm();
  const { formData, formItemData } = props;
  const [formDataObj] = useState(formData || defalutFormData);
  const [formItemDataArr] = useState(formItemData || defalutFormItemDataArr);
  // 此处注意useImperativeHandle方法的的第一个参数是目标元素的ref引用
  useImperativeHandle(ref, () => ({
    // 提交表单
    submitForm: () => {
      form.submit();
    },
    // 重置表单
    resetForm: () => {
      form.resetFields();
    },
  }));

  // const param = (({ name, sex }) => ({ name, sex }))(student);

  // console.log(param, 'param');

  const renderNoLabel = item => {
    const itemStyle = classNames('mb-0', { [`${item.name}-item`]: true });
    return (
      <Form.Item className={itemStyle} {...item.layout} {...item}>
        {item.children ? <item.children /> : <Input placeholder={item.placeholder} allowClear />}
      </Form.Item>
    );
  };

  const renderHasLabel = item => {
    // console.log(item, 'colon');
    const itemStyle = classNames('mb-0', { [`${item.name}-item`]: true });
    return (
      <Form.Item className={itemStyle} {...item} {...item.layout}>
        {item.children ? <item.children /> : <Input placeholder={item.placeholder} allowClear />}
      </Form.Item>
    );
  };

  return (
    <div className="exampleForm">
      <Form
        form={form}
        {...formDataObj}
        onFinish={values => {
          props.onFinish(values);
        }}
        onFinishFailed={values => {
          props.onFinishFailed(values);
        }}
      >
        {formItemDataArr.map(
          (item: { name: string | number | undefined; label: string | undefined }) => (
            <div key={item.name}>{item.label ? renderHasLabel(item) : renderNoLabel(item)}</div>
          )
        )}
      </Form>
    </div>
  );
};

export default forwardRef(ExampleForm);
