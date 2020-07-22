import React, { useContext, useEffect } from 'react';
import './index.less';
import { MyContext } from '../../config/contextManager';

const Form = props => {
  console.log(useContext(MyContext), 'txt');
  const { setShowSide } = useContext(MyContext);
  useEffect(() => {
    const { sideMenu } = props.route;
    setShowSide(sideMenu);
  });
  return <div className="formPage">表单</div>;
};

export default Form;
