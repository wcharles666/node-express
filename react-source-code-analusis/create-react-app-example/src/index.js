import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// 通过babel将jsx转为普通js
const ele = (
  <div title="hello">
    <h3 className="title">hello, react</h3>
  </div>
);

// var ele = React.createElement(
//   "div",
//   {
//     title: "hello",
//   },
//   React.createElement(
//     "h3",
//     {
//       className: "title",
//     },
//     "hello, react"
//   )
// );

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  componentDidMount() {
    for (let i = 0; i < 100; i++) {
      // this.setState({
      //   number: this.state.number + 1,
      // });
      this.setState((prevState, prevProps) => {
        console.log(prevState.number);
        // 回调函数
        return {
          number: prevState.number + 1,
        };
      });
      // setState为异步性操作, state的合并 在一段时间清空队列
      console.log(this.state.number, "sds");
    }
    // for (let i = 0; i < 100; i++) {
    //   this.setState(
    //     (prevState, prevProps) => {
    //       console.log(prevState, "prevState");
    //       return {
    //         number: prevState.number + 1,
    //       };
    //     },
    //     () => {
    //       console.log(this.state.number);
    //     }
    //   );
    //   console.log(this.state.number);
    // }
  }
  render() {
    return <div>{this.state.number}</div>;
  }
}

// jsx： javaScript+xml 语法糖 虚拟Dom =>(diff) 真实dom
// ReactDOM.render(<Home />, document.getElementById("root"));
// 1.虚拟Dom 2.容器
ReactDOM.render(ele, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
