import React from "./react";
import ReactDOM from "./react-dom/componentPart";
import "./index.css";

//  核心: 组件化开发

// 1.为什么ReactDOM.render() 必须要引入React?
// 2.组件： 函数组件 类组件

const Home = (props) => {
  return (
    <div className="active" title="1232">
      hello<span>react 数量{props.name}</span>
    </div>
  );
};

console.log(<Home name="home" />, "Home");

class ClassComponet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  componentWillMount() {
    console.log("组将将要加载");
  }
  componentDidMount() {
    // for (let i = 0; i < 100; i++) {
    //   this.setState((prevState, prevProps) => {
    //     console.log(prevState.number);
    //     return {
    //       number: prevState.number + 1,
    //     };
    //   });
    //   console.log(this.state.num);
    // }
    console.log("组件加载完成");
  }
  componentWillReceiveProps(props) {
    console.log("props");
  }

  componentWillUpdate() {
    console.log("组件将要更新");
  }

  componentDidUpdate() {
    console.log("组件更新完成");
  }

  handleClick() {
    // 修改状态的唯一方法是调用setState
    this.setState({
      number: this.state.number + 1,
    });
  }

  render() {
    return (
      <div className="active">
        <p>我是类组件</p>
        <p>数量{this.state.number}</p>
        <button onClick={this.handleClick.bind(this)}>点击我</button>
      </div>
    );
  }
}
console.log(<ClassComponet name="class" />, "ClassComponet");

// 函数组件
// ReactDOM.render(<Home name="home" />, document.getElementById("root"));
// 类组件
ReactDOM.render(<ClassComponet name="home" />, document.getElementById("root"));
