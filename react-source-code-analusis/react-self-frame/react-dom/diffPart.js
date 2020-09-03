import Component from "../react/componentNormalDiff";
import { diff, diffNode } from "./diff";
// import React from "../react";

// const render = (vnode, container) => {
//   // console.log(typeof vnode);
//   // console.log(vnode, "dsds");
//   // console.log(container, "dsds");
//   return container.appendChild(_render(vnode));
// };

const render = (vnode, container, dom) => {
  // 开始起初dom为undefined
  console.log(vnode, container, dom);
  // console.log(typeof vnode);
  // console.log(vnode, "dsds");
  // console.log(container, "dsds");
  return diff(dom, vnode, container);
};

export const createComponent = (comp, props) => {
  // function是可以直接调用的，但是class是需要通过new去创建一个实例来使用的
  // 通过判定原型是否有render方法进行判别是否为class组件
  // instanceof就是通过原型链来进行类型判断的,因此我们可以直接采用instanceof来进行判断
  // 我们能否只检测 React.Component 的后代呢？
  let inst;
  // if (comp.prototype && comp.prototype instanceof React.Component) {
  if (comp.prototype && comp.prototype.render) {
    console.log("类组件吗", comp);
    // 如果是类定义的组件, 则创建新的实例,返回
    inst = new comp(props);
  } else {
    // 如果是函数组件,将函数组件扩展为类组件，方便后面统一管理
    inst = new Component(props);
    inst.constructor = comp;
    // 定义render函数
    inst.render = function () {
      return this.constructor(props);
    };
  }
  return inst;
};

export const setComponentProps = (comp, props) => {
  if (!comp.base) {
    if (comp.componentWillMount) comp.componentWillMount();
  } else if (comp.componentWillReceiveProps) {
    comp.componentWillReceiveProps();
  }

  // 设置组件属性
  comp.props = props;
  // 渲染组件
  renderComponent(comp);
};

export const renderComponent = (comp) => {
  let base;
  // 调用render，返回jsx对象
  const renderer = comp.render();
  // 重新渲染时,需要diff一下
  // base = _render(renderer);
  base = diffNode(comp.base, renderer);
  if (comp.base && comp.componentWillUpdate) {
    comp.componentWillUpdate();
  }
  if (comp.base) {
    if (comp.componentDidUpdate) comp.componentDidUpdate();
  } else if (comp.componentDidMount) {
    comp.componentDidMount();
  }

  // 节点替换
  // if (comp.base && comp.base.parentNode) {
  //   comp.base.parentNode.replaceChild(base, comp.base);
  // }
  comp.base = base;
};

/*
  添加属性
*/
export const setAttribute = (dom, key, value) => {
  // 将属性名className 转换为class
  if (key === "className") {
    key = "class";
  }
  // 如果是事件 onClick...
  if (/on\w+/.test(key)) {
    // 转为小写
    key = key.toLowerCase();
    dom[key] = value || "";
  } else if (key === "style") {
    if (!value || typeof value === "string") {
      dom.style.cssText = value || "";
    } else if (value && typeof value === "object") {
      // style={{ width: 20 }}
      for (let k in value) {
        if (typeof value[k] === "number") {
          dom.style[k] = `${value[k]}px`;
        } else {
          dom.style[k] = `${value[k]}`;
        }
      }
    }
  } else {
    // 其它属性
    if (key in dom) {
      dom[key] = value || "";
    }
    // value有值的话, 更新属性
    if (value) {
      dom.setAttribute(key, value);
    } else {
      // 无值移除属性
      dom.removeAttribute(key);
    }
  }
};

const ReactDOM = {
  render,
};

export default ReactDOM;
