// 1. 异步更新State,短时间内把多个State合并为一个(队列) 先进先出
import { renderComponent } from "../react-dom/diffPart";
// 2.一段时间之后，循环清空队列,渲染组件

// 数组模拟队列
const setStateQueue = [];
// 保存当前组件
const renderQueue = [];

const defer = (fn) => {
  return Promise.resolve().then(fn);
};

export const enqueueSetState = (stateChange, component) => {
  if (setStateQueue.length === 0) {
    // setTimeout(() => {
    //   flush();
    // }, 0);
    defer(flush);
  }
  // 1.短时间内合并多个SetState;
  setStateQueue.push({
    stateChange,
    component,
  });

  //  如果renderQueue里面没有组件, 添加到队列中
  let r = renderQueue.some((item) => {
    return item === component;
  });
  if (!r) {
    // 证明第一次添加
    renderQueue.push(component);
  }
};

// 一段时间之后
const flush = () => {
  let item, component;
  // 对列中已有值
  // while ((item = setStateQueue.pop())) {
  while ((item = setStateQueue.shift())) {
    // console.log(item, "dsd");
    const { stateChange, component } = item;
    // 保存之前的状态
    if (!component.prevState) {
      component.prevState = Object.assign({}, component.state);
    }

    if (typeof stateChange === "function") {
      //  如果为函数
      Object.assign(
        component.state,
        stateChange(component.prevState, component.props)
      );
    } else {
      Object.assign(component.state, stateChange);
    }
    // 赋值
    component.prevState = component.state;
  }

  while ((component = renderQueue.shift())) {
    renderComponent(component);
  }
};
