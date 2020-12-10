import React, { useContext, useEffect } from 'react';
import './index.less';
import { dipatchLeftSide } from '@/config/commonMethods';

const StudyLibiray = (props: any) => {
  dipatchLeftSide(props);
  return <div className="studyLibirayPage">学习概述</div>;
};

export default StudyLibiray;
