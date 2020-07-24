import React, { useContext, useEffect } from 'react';
import './index.less';
import { dipatchLeftSide } from '@/config/commonMethods';

const ComLibiray = (props: any) => {
  dipatchLeftSide(props);
  return <div className="comLibirayPage">组件概览</div>;
};

export default ComLibiray;
