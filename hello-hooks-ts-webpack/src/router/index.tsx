import React from 'react';
import { Switch } from 'react-router-dom';
import renderRoutes from '@/utils/renderRouter';

// const authed = true; // 登录之后可以利用redux修改此值
const authPath = '/login'; // 默认未登录的时候返回的页面，可以自行设置

const RouteMap = ({ routes }) => {
  console.log(routes, 'routessdds');
  return <Switch>{renderRoutes(routes, authPath)}</Switch>;
};

export default RouteMap;
