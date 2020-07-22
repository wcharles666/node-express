import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

const renderNavMenu = () => {
  return (
    <ul className="navs-menu ul-public">
      <li className="navs-menu-item">
        <Link to="/main/home">
          <span>首页</span>
        </Link>
      </li>
      <li className="navs-menu-item">
        <Link to="/main/components/form">
          <span>组件库</span>
        </Link>
      </li>
      <li className="navs-menu-item">
        <Link to="/main/demo">
          <span>Demo案例</span>
        </Link>
      </li>
    </ul>
  );
};

const renderSettingsMenu = () => {
  return (
    <ul className="navs-settings-menu ul-public">
      <li className="navs-settings-menu-item">
        <Link to="/">
          <span>设置1</span>
        </Link>
      </li>
    </ul>
  );
};

const renderUserMenu = () => {
  return (
    <ul className="navs-userInfo-menu ul-public">
      <li className="navs-userInfo-menu-item">
        <Link to="/">
          <span>Charles</span>
        </Link>
      </li>
    </ul>
  );
};

const LayoutHeader = () => {
  return (
    <div className="layoutHeader position-fixed top-0 left-0 w-100">
      <nav className="navs-header h-100">
        <div className="navs-brand">logo</div>
        <div className="navs-right-container">
          {renderNavMenu()}
          {renderSettingsMenu()}
          {renderUserMenu()}
        </div>
      </nav>
    </div>
  );
};

export default LayoutHeader;
