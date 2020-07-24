import React, { createContext, useEffect } from 'react';
import _ from 'lodash';
import { useLocation, useParams } from 'react-router-dom';
import './index.less';
import LayoutSider from '@/components/LayoutSider';
import LayoutContent from '@/components/LayoutContent';
import { MyContext } from '@/config/contextManager';
import { useState, useContext } from 'react';
import { sideBarStore } from '@/config/commonData';

// const ThemeContext = createContext({});

const LayoutContainer = props => {
  console.log(props);
  console.log(useContext(MyContext), 'sadsad');
  const { state } = useContext(MyContext);
  const { leftSide, headActiveMenu } = state;
  console.log(state, '===');

  const sideMenu = sideBarStore[headActiveMenu] || [];

  console.log(sideMenu, 'sdsd');

  return (
    <div className="layoutContainer position-all">
      {leftSide && <LayoutSider sideMenu={sideMenu} />}
      <LayoutContent />
    </div>
  );
};

export default LayoutContainer;
