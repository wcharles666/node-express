import { useState, useEffect, useContext } from 'react';
import { MyContext } from './contextManager';

const HandleSider = (sideMenu: boolean) => {
  const { setShowSide } = useContext(MyContext);
  useEffect(() => {
    setShowSide(sideMenu);
  });
  return false;
};

export default HandleSider;
