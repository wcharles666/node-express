import React, { useState, useEffect, useRef } from 'react';

import { Button, Checkbox } from 'antd';
import './index.less';
import ExampleForm from '../ExampleForm/index';

const emojiSet = ['🎃', '👻', '🧟', '😱', '👽', '💀'];

const initFormData = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
  name: 'example1',
  initialValues: { remember: false },
};

const initFormItemData = [
  {
    label: 'Username1',
    name: 'username1',
    rules: [{ required: true, message: 'Please input your happyTime!' }],
    placeholder: '你说啥嘞',
  },
  {
    label: 'Username2',
    name: 'username2',
    rules: [{ required: true, message: 'Please input your userName2!' }],
    placeholder: '我啥子都没说的嘞',
  },
  {
    name: 'remember',
    layout: { wrapperCol: { offset: 8, span: 14 } },
    children: Checkbox,
    valuePropName: 'checked',
  },
];

const ExampleHooks = () => {
  const [emoji, setEmoji] = useState(emojiSet[0]);
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');
  const [formData] = useState(initFormData);
  const [formItemData] = useState(initFormItemData);

  const exampleFormRef = useRef();

  useEffect(() => {
    setToken(sessionStorage.setItem('token', token));
  });

  // 提交表单
  const onSubmitForm = () => {
    // changeVal就是子组件暴露给父组件的方法
    exampleFormRef.current.submitForm();
  };
  // 重置表单
  const onResetForm = () => {
    exampleFormRef.current.resetForm();
  };
  const changeEmoj = () => {
    const randomIndex = Math.floor(Math.random() * emojiSet.length);
    setEmoji(emojiSet[randomIndex]);
  };

  const onFinish = data => {
    console.log(data, 'value');
  };

  const onFinishFailed = data => {
    console.log(data, 'onFinishFailed');
  };

  return (
    <div className="exampleHooks">
      <div>1.更换表情,使用useState</div>
      <span className="emojyIcon mr-2">{emoji}</span>
      <Button
        type="dashed"
        onClick={() => {
          changeEmoj();
        }}
      >
        更换表情
      </Button>
      <div>2.拿取浏览器的中的session</div>
      <div>hello</div>
      {token ? token : <span>浏览器中还没有token</span>}
      <div>3.公用Antd form组件封装</div>
      <div className="formContain">
        <ExampleForm
          formData={formData}
          formItemData={formItemData}
          ref={exampleFormRef}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        />
      </div>
      <Button
        onClick={() => {
          onSubmitForm();
        }}
      >
        查询
      </Button>
      <Button
        onClick={() => {
          onResetForm();
        }}
      >
        重置
      </Button>
    </div>
  );
};

export default ExampleHooks;
