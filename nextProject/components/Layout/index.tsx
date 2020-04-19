import Header from '../Header';
import * as React from 'react';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = (props: any) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;