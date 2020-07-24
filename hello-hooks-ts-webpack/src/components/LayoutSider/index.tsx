import React, { useState, useContext } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './index.less';
// import { sideBar } from '@/config/navBarStore';
import { MyContext } from '@/config/contextManager';
import { stopRouterChange } from '@/config/commonMethods';

const { SubMenu } = Menu;

const LayoutSider = props => {
  console.log(props);
  const { sideMenu } = props;
  // const [menuArr] = useState(sideBar);

  const defaultOpenKeys = [];

  sideMenu.forEach(item => {
    defaultOpenKeys.push(item.name);
  });

  const { state } = useContext(MyContext);
  const { sideActiveMenu } = state;

  return (
    <div className="layoutSider">
      <Menu
        forceSubMenuRender={true}
        defaultSelectedKeys={[sideActiveMenu]}
        defaultOpenKeys={defaultOpenKeys}
        mode="inline"
        overflowedIndicator={<span></span>}
        className="w-100"
        // inlineCollapsed={collapsed}
      >
        {sideMenu.map(item => {
          return item.menu ? (
            <Menu.Item key={item.menu.pathName}>
              <Link
                to={item.menu.pathName}
                onClick={e => stopRouterChange(e, item.menu.pathName, sideActiveMenu)}
              >
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
          ) : (
            <SubMenu
              key={item.name}
              title={
                <span>
                  <span>{item.title}</span>
                </span>
              }
            >
              {item.subMenu &&
                item.subMenu.data.map(item => (
                  <Menu.Item key={item.pathName}>
                    <Link to={item.pathName}>
                      <span>{item.title}</span>
                    </Link>
                  </Menu.Item>
                ))}
            </SubMenu>
          );
        })}
      </Menu>
    </div>
  );
};

export default LayoutSider;
