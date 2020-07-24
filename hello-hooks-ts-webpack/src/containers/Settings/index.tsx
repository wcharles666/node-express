import React from 'react';
import './index.less';
import { dipatchLeftSide } from '@/config/commonMethods';

const Settings = (props: any) => {
  dipatchLeftSide(props);
  return <div className="settingsPage">设置页面</div>;
};

export default Settings;
