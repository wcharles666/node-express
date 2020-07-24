import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import './index.less';

const Login = () => {
  let history = useHistory();
  const enterHome = () => {
    history.push('/');
  };
  return (
    <div className="loginPage">
      <Button onClick={() => enterHome()}>登录进来去首页</Button>
    </div>
  );
};

export default Login;
