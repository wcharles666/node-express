import React from 'react';
import './index.less';
import { dipatchLeftSide } from '@/config/commonMethods';

const DemoExample = (props: any) => {
  dipatchLeftSide(props);
  return <div className="paginationPage">demo</div>;
};

export default DemoExample;
