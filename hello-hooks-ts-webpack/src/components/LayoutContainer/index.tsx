import React, { createContext, useEffect } from 'react';
import _ from 'lodash';
import { useLocation, useParams } from 'react-router-dom';
import './index.less';
import LayoutSider from '@/components/LayoutSider';
import LayoutContent from '@/components/LayoutContent';
import { MyContext } from '../../config/contextManager';
import { useState } from 'react';

// const ThemeContext = createContext({});

const LayoutContainer = props => {
  console.log(props);

  const [showSide, setShowSide] = useState(false);
  let location = useLocation();
  let params = useParams();
  useEffect(() => {
    // usePageViews();
    const { state } = location;
    console.log(location);
    console.log(params, 'params');
    // const pathname = _.get(state, 'router.location.pathname', '');
    // let match = useRouteMatch(location.pathname);
    console.log(location, 'location');
    //  console.log(pathname);
  });

  return (
    <div className="layoutContainer position-all">
      <MyContext.Provider value={{ setShowSide }}>
        {showSide && <LayoutSider />}
        <LayoutContent />
      </MyContext.Provider>
    </div>
  );
};

export default LayoutContainer;
