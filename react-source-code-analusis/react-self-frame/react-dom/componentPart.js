import Component from "../react/componentNormalDiff";
import React from "../react";

const render = (vnode, container) => {
  // 返回js节点对象
  return container.appendChild(_render(vnode));
};

// comp: 函数 函数即组件
export const createComponent = (comp, props) => {
  // 函数即是组件
  // function是可以直接调用的，但是class是需要通过new去创建一个实例来使用的
  // 通过判定原型是否有render方法进行判别是否为class组件
  // instanceof就是通过原型链来进行类型判断的,因此我们可以直接采用instanceof来进行判断
  // 我们能否只检测 React.Component 的后代呢？
  // Greeting.prototype instanceof React.Component
  // 当你使用class(类)声明一个组件，你肯定想继承React.Component中像this.setState()一样的内部方法。与其去费力去分辨一个函数是不是一个类，还不如我们去验证这个类是不是React.Component的实例。

  // 通过new操作符调用构造函数，会经历以下4个阶段

  // 1.创建一个新的对象；
  // 2.将构造函数的this指向这个新对象；
  // 3.指向构造函数的代码，为这个对象添加属性，方法等；
  // 4.返回新对象。
  // 博客地址：https://blog.csdn.net/weixin_33779515/article/details/87958100
  let inst;
  if (comp.prototype && comp.prototype instanceof React.Component) {
    // if (comp.prototype && comp.prototype.render) {
    console.log("类组件吗", comp);
    // 如果是类定义的组件, 则创建新的实例,返回
    inst = new comp(props);
  } else {
    // 如果是函数组件,将函数组件扩展为类组件，方便后面统一管理
    inst = new Component(props);
    // 改变构造函数的指向x
    inst.constructor = comp;
    // console.log(inst, "sdd");
    // 定义render函数
    inst.render = function () {
      // 返回jsx对象
      return this.constructor(props);
    };
  }
  return inst;
};

export const renderComponent = (comp) => {
  let base;
  // 调用render，返回jsx对象
  const renderer = comp.render();
  console.log(renderer, "dsdsd");
  base = _render(renderer);
  console.log(base, "base");
  if (comp.base && comp.componentWillUpdate) {
    comp.componentWillUpdate();
  }
  // 节点替换
  if (comp.base && comp.base.parentNode) {
    comp.base.parentNode.replaceChild(base, comp.base);
  }

  if (comp.base) {
    if (comp.componentDidUpdate) comp.componentDidUpdate();
  } else if (comp.componentDidMount) {
    comp.componentDidMount();
  }
  comp.base = base;
};

export const setComponentProps = (comp, props) => {
  // 通过当前组件是否有挂载base节点对象
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

const _render = (vnode) => {
  // render方法里面解析vnode
  if (
    typeof vnode === "undefined" ||
    vnode === null ||
    typeof vnode === "boolean"
  ) {
    return "";
  }

  if (typeof vnode === "number") {
    vnode = String(vnode);
  }

  // 如果vnode是字符串
  if (typeof vnode === "string") {
    // 创建文本节点
    return document.createTextNode(vnode);
  }

  // 如果tag是函数,则渲染组件
  if (typeof vnode.tag === "function") {
    // 1. 创建组件
    const comp = createComponent(vnode.tag, vnode.attrs);
    // 2. 设置组件的属性xxx
    console.log(comp, "comp");
    setComponentProps(comp, vnode.attrs);
    // 3. 组件渲染的节点对象返回
    return comp.base;
  }

  // 否则就是一个虚拟DOM对象
  const { tag, attrs } = vnode;
  // 创建节点对象
  let dom = document.createElement(tag);

  if (attrs) {
    // 有属性
    Object.keys(attrs).forEach((key) => {
      const value = attrs[key];
      // console.log(value, key);
      // 添加属性(dom元素，key 属性 value属性值)
      setAttribute(dom, key, value);
    });
  }
  // 递归渲染子节点
  if (vnode.childrens) {
    vnode.childrens.forEach((child) => render(child, dom));
  }
  // return container.appendChild(dom);
  return dom;
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
