import React from 'react';
import { BrowserRouter, useHistory } from 'react-router-dom';
import App from '@/App';
import routes from '@/config/router';
import RouterMap from '@/router';

const isLogin = false;

const Main = () => {
  const history = useHistory();

  const getConfirmation = (message, callback) => {
    console.log('dsds');
    if (!isLogin) {
      message.push('/login');
    } else {
      message.push(message.location.pathname);
    }
  };
  return (
    <BrowserRouter
      basename="/"
      getUserConfirmation={() => getConfirmation(history, 'yourCallBack')}
    >
      <App isLogin={isLogin ? true : false}>
        <div>sdsd</div>
        <RouterMap routes={routes} />
      </App>
    </BrowserRouter>
  );
};

export default Main;
