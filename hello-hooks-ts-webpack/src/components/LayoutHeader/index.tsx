import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import classNames from 'classnames';
import './index.less';
import { headerMenu } from '@/config/commonData';
import { MyContext } from '@/config/contextManager';
import { stopRouterChange } from '@/config/commonMethods';

const renderNavMenu = () => {
  const { state } = useContext(MyContext);
  const { headActiveMenu } = state;
  // const [activeMenu, setActiveMenu] = useState('');

  const navsMenuClass = (pathName: string) => {
    return classNames('navs-menu-item', { 'navs-menu-item-active': headActiveMenu === pathName });
  };

  return (
    <ul className="navs-menu ul-public">
      {headerMenu.map((item: any) => (
        <li key={item.name} className={navsMenuClass(item.pathName)}>
          <Link
            onClick={e => stopRouterChange(e, item.pathName, headActiveMenu)}
            to={item.pathName}
            style={{ color: item.pathName === headActiveMenu ? '#ffffff' : '#333333' }}
            className="nav-menu-link"
          >
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
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
