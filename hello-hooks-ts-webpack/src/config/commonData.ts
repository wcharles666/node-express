import { comSideBar, demoSideBar } from '@/config/navBarStore';

export const headerMenu = [
  { name: 'home', pathName: '/', title: '首页' },
  { name: 'comLibiray', pathName: '/main/components', title: '组件库' },
  { name: 'demoExample', pathName: '/main/demo', title: 'Demo案例' },
];

export const sideBarStore = {
  '/main/components': comSideBar,
  '/main/demo': demoSideBar,
};
