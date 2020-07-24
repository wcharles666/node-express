import Login from '@/containers/Login';
import Main from '@/containers/Main';
import NotFound from '@/components/NotFound';

const routes = [
  { path: '/', component: Main, requiresAuth: false, exact: true },
  // { path: '/', exact: true, component: Main, requiresAuth: false  },
  { path: '/main', component: Main, requiresAuth: false },
  {
    path: '/login',
    exact: true,
    component: Login,
    requiresAuth: false,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
