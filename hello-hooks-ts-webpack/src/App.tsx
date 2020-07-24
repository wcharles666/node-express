import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// 设计全局组件来管理是否跳转到登录

interface AppProp {
  children: object;
  location: object;
  isLogin: boolean;
  history: object;
}
// class App extends Component<AppProp> {

//   componentDidMount() {
//     console.log(this.props);
//     if (!this.props.isLogin) {
//       setTimeout(() => {
//         this.props.history.push('/login');
//       }, 300);
//     }
//     if (this.props.isLogin && this.props.location.pathname === '/login') {
//       setTimeout(() => {
//         this.props.history.push('/');
//       }, 300);
//     }
//   }

//   componentDidUpdate() {
//     // console.log('dsds');
//     // if (!this.props.isLogin) {
//     //   setTimeout(() => {
//     //     this.props.history.push('/login');
//     //   }, 300);
//     // }
//   }
//   render() {
//     return this.props.children;
//   }
// }

// const App = props => (
//   props.children;
// );

const App = props => {
  let history = useHistory();
  console.log(props, 'sdhjs');
  useEffect(() => {
    // const { isLogin } = props;
    // if (isLogin) {
    //   history.push('/login');
    // }
  });
  return props.children;
};

export default App;
