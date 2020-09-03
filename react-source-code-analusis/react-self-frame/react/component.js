// import { renderComponent } from "../react-dom";
import { renderComponent } from "../react-dom/diffPart";

class Component {
  constructor(props = {}) {
    this.props = props;
    this.state = {};
  }
  setState(stateChange) {
    // 直接简单一点，进行浅拷贝
    // 对象拷贝
    Object.assign(this.state, stateChange);
    // 渲染组件
    renderComponent(this);
  }
}

export default Component;
