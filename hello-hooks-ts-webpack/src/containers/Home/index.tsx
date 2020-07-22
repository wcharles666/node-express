import React, { useState } from 'react';
import './index.less';
import HandleSider from '../../config/handleSider';

const Home = props => {
  HandleSider(props);
  console.log('dksjdkjskd');
  return <div className="homePage">首页</div>;
};

export default Home;
