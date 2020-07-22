import React from 'react';
import RouterMap from '@/router';
import contentRoutes from '@/config/contentRouterStore';

import './index.less';

const LayoutContent = () => {
  return (
    <div className="layoutContent">
      <RouterMap routes={contentRoutes} />
    </div>
  );
};

export default LayoutContent;
