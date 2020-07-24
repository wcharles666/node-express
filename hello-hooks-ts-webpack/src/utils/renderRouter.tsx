import React from 'react';

import { Route, Redirect, Switch } from 'react-router-dom';
import { sideBar } from '../config/navBarStore';

// authed 是否需要权限 authPath表示无访问权限时跳转那个页面
const renderRoutes = (routes, authPath = '/login', extraProps = {}, switchProps = {}) => {
  console.log(routes, 'sds');
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props => {
            // 如果 route.requiresAuth = false 或者 authed = true 或者 route.path === authPath（参数默认值'/login'）则渲染我们页面，否则就渲染我们设置的authPath页面，并记录从哪个页面跳转
            if (!route.requiresAuth || route.path === authPath) {
              return <route.component {...props} {...extraProps} route={route} />;
            }
            // 如果无访问权限时则跳转到登录页
            return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />;
          }}
        />
      ))}
    </Switch>
  ) : null;
};

export default renderRoutes;
