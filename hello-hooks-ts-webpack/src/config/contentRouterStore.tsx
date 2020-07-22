// import _ from 'lodash';
// import {  } from 'react-router-dom';
import Home from '@/containers/Home';
import Form from '@/containers/Form';
import Table from '@/containers/Table';
import Pagination from '@/containers/Pagination';
import ThreeEarth from '@/containers/ThreeEarth';

const contentRoutes = [
  {
    path: '/main/home',
    name: 'home',
    component: Home,
    sideMenu: false,
  },
  {
    path: '/main/components/form',
    name: 'form',
    component: Form,
    // requiresAuth: true,
    sideMenu: true,
  },
  {
    path: '/main/components/table',
    name: 'table',
    component: Table,
    sideMenu: true,
  },
  {
    path: '/main/components/pagination',
    name: 'pagination',
    component: Pagination,
    sideMenu: true,
  },
  {
    path: '/main/components/threeEarth',
    name: 'threeEarth',
    component: ThreeEarth,
    sideMenu: true,
  },
  {
    path: '/main/demo',
    name: 'home',
    component: Home,
    sideMenu: false,
  },
];

// // const pathname = _.get(state, 'router.location.pathname', '');

// console.log(router);

export default contentRoutes;
