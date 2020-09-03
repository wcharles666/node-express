import { renderComponent } from "../react-dom/diffPart";
// import { renderComponent } from "../react-dom/componentPart";
import { enqueueSetState } from "./set_state_queue";

class Component {
  constructor(props = {}) {
    this.props = props;
    this.state = {};
  }
  setState(stateChange) {
    // console.log(stateChange, "stateChange");
    // // 直接简单一点，进行浅拷贝
    // // 对象拷贝
    // Object.assign(this.state, stateChange);
    // 状态改变, 渲染组件
    // renderComponent(this);
    // console.log("stateChange", stateChange);
    // console.log(this);
    enqueueSetState(stateChange, this);
  }
}

export default Component;
