// import _ from 'lodash';
// import {  } from 'react-router-dom';
import Home from '@/containers/Home';
import ComLibiray from '@/containers/ComLibiray';
import DemoExample from '@/containers/DemoExample';
import Settings from '@/containers/Settings';
import AntdForm from '@/components/antdCom/formHook';
import AntdTable from '@/components/antdCom/tableHook';
import AntdPagaination from '@/components/antdCom/pagainationHook';
import AntdXhTable from '@/components/antdCom/xhTable';
import NotFound from '@/components/NotFound';
import SvgDemo1 from '@/components/svgCom/svgDemo1';
import SvgDemo2 from '@/components/svgCom/svgDemo2';
import StudyLibiray from '@/containers/StudyLibiray';
import TsGeneric from '@/components/tsLink/tsGeneric';

const contentRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    exact: true,
    // requiresAuth: true,
    leftSide: false,
  },
  {
    path: '/main/components',
    name: 'comLibiray',
    component: ComLibiray,
    exact: true,
    // requiresAuth: true,
    leftSide: true,
  },
  {
    path: '/main/components/form',
    name: 'antdForm',
    exact: true,
    component: AntdForm,
    leftSide: true,
  },
  {
    path: '/main/components/table',
    name: 'antdTable',
    exact: true,
    component: AntdTable,
    leftSide: true,
  },
  {
    path: '/main/components/pagaination',
    name: 'antdPagaination',
    exact: true,
    component: AntdPagaination,
    leftSide: true,
  },
  {
    path: '/main/components/xhTable',
    name: 'antdXhTable',
    exact: true,
    component: AntdXhTable,
    leftSide: true,
  },
  {
    path: '/main/components/svgDemo1',
    name: 'svgDemo1',
    exact: true,
    component: SvgDemo1,
    leftSide: true,
  },
  {
    path: '/main/components/svgDemo2',
    name: 'svgDemo2',
    exact: true,
    component: SvgDemo2,
    leftSide: true,
  },
  {
    path: '/main/study',
    name: 'studyLibiray',
    exact: true,
    component: StudyLibiray,
    leftSide: true,
  },
  {
    path: '/main/study/tsGeneric',
    name: 'tsGeneric',
    exact: true,
    component: TsGeneric,
    leftSide: true,
  },
  {
    path: '/main/demo',
    name: 'demoExample',
    exact: true,
    component: DemoExample,
    leftSide: true,
  },
  {
    path: '/main/settings',
    name: 'Settings',
    exact: true,
    component: Settings,
    leftSide: false,
  },
  {
    path: '*',
    component: NotFound,
  },
];

// // const pathname = _.get(state, 'router.location.pathname', '');

// console.log(router);

export default contentRoutes;
