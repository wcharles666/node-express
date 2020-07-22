import React, { useState } from 'react';

import './index.less';
import LayoutHeader from '@/components/LayoutHeader';
import LayoutContent from '@/components/LayoutContainer';

const Main = props => {
  console.log(props, 'peop');
  return (
    <div className="app position-all">
      <LayoutHeader />
      <LayoutContent />
    </div>
  );
};

export default Main;
