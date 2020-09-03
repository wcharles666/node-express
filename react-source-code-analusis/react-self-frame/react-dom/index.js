import Component from "../react/component";
import { diff, diffNode } from "./diff";

const render = (vnode, container) => {
  return diff(dom, vnode, container);
};

export const createComponent = (comp, props) => {
  // function是可以直接调用的，但是class是需要通过new去创建一个实例来使用的
  // 通过判定原型是否有render方法进行判别是否为class组件
  // instanceof就是通过原型链来进行类型判断的,因此我们可以直接采用instanceof来进行判断
  // 我们能否只检测 React.Component 的后代呢？
  let inst;
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

export const renderComponent = (comp) => {
  let base;
  // 调用render，返回jsx对象
  const renderer = comp.render();
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
    // return container.appendChild(textNode);
  }

  // 如果tag是函数,则渲染组件
  if (typeof vnode.tag === "function") {
    // 1. 创建组件
    const comp = createComponent(vnode.tag, vnode.attrs);
    // 2. 设置组件的属性
    // console.log(comp, "comp");
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
