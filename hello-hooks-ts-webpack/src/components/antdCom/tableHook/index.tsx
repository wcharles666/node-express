import React from 'react';
import { dipatchLeftSide } from '@/config/commonMethods';

const AntdTable = (props: any) => {
  dipatchLeftSide(props);
  return <div className="antdTablePage">表格</div>;
};

export default AntdTable;
