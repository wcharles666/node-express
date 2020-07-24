import React, { useState } from 'react';
import './index.less';
import { dipatchLeftSide } from '@/config/commonMethods';

const Home = (props: any) => {
  dipatchLeftSide(props);
  return <div className="homePage">首页</div>;
};

export default Home;
