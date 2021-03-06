import Login from '@/containers/Login';
import Register from '@/containers/Register';
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
    path: '/register',
    exact: true,
    component: Register,
    requiresAuth: false,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
