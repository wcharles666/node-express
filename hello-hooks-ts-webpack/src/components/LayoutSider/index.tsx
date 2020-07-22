import React, { useState, useContext } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import './index.less';
import { sideBar } from '@/config/navBarStore';

const { SubMenu } = Menu;

const LayoutSider = () => {
  const [openKeys] = useState(['components']);
  const [menuArr] = useState(sideBar);

  console.log(menuArr);

  const onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => openKeys.indexOf(key) === -1);
    // if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    //   this.setState({ openKeys });
    // } else {
    //   this.setState({
    //     openKeys: latestOpenKey ? [latestOpenKey] : [],
    //   });
    // }
  };
  return (
    <div className="layoutSider">
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={keys => {
          onOpenChange(keys);
        }}
        className="w-100"
      >
        {menuArr.map(item => (
          <SubMenu
            key={item.name}
            title={
              <span>
                <MailOutlined />
                <span>{item.title}</span>
              </span>
            }
          >
            {item.subMenu &&
              item.subMenu.data.map(item => (
                <Menu.Item key={item.name}>
                  <Link to={item.path}>
                    <span>{item.name}</span>
                  </Link>
                </Menu.Item>
              ))}
          </SubMenu>
        ))}
      </Menu>
    </div>
  );
};

export default LayoutSider;
