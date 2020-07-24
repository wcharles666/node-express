import React from 'react';
import { dipatchLeftSide } from '@/config/commonMethods';

const AntdPagaination = (props: any) => {
  dipatchLeftSide(props);
  return <div className="antdPagainationPage">分页</div>;
};

export default AntdPagaination;
