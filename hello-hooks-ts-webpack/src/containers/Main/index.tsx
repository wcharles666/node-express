import React, { useState, useReducer, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './index.less';
import LayoutHeader from '@/components/LayoutHeader';
import LayoutContent from '@/components/LayoutContainer';

import { MyContext } from '../../config/contextManager';
import { commonState } from '../../useReducer/initSate';
import { commonReducer } from '../../useReducer/reducer';

import { getActiveMenu } from '@/config/commonMethods';

const Main = props => {
  console.log(props, 'peop');
  const [state, dispatch] = useReducer(commonReducer, commonState);

  console.log(commonState, 'sdsads');
  const location = useLocation();
  useEffect(() => {
    const { pathname } = location;
    // 监听路由状态的变化,根据pathnname动态修改reducer中 activeHeaderMenu 以及activeLeftMenu
    getActiveMenu(dispatch, pathname);
  }, [location]);

  return (
    <div className="app position-all">
      <MyContext.Provider value={{ state, dispatch }}>
        <LayoutHeader />
        <LayoutContent />
      </MyContext.Provider>
    </div>
  );
};

export default Main;
