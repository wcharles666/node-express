import React from 'react';
import { render } from 'react-dom';
// px to rem 配置文件
import '@/config/remRoot';
import Main from '@/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.less';

// render(<div>首页</div>, document.getElementById('root'))
render(<Main />, document.getElementById('root'));

// if (module.hot) {
//   module.hot.accept()
// }
