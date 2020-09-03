const render = (vnode, container) => {
  // console.log("vnode====================================");
  // console.log(vnode);
  // console.log("container====================================");
  // console.log(container);
  return container.appendChild(_render(vnode));
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

  // 否则就是一个虚拟DOM对象
  const { tag, attrs } = vnode;
  // 创建节点对象
  let dom = document.createElement(tag);

  if (attrs) {
    // 有属性
    Object.keys(attrs).forEach((key) => {
      const value = attrs[key];
      // console.log(dom, "dsds");
      // console.log(value, key);
      // 添加属性(dom元素，key 属性 value属性值)
      setAttribute(dom, key, value);
    });
  }
  // 递归渲染子节点
  if (vnode.childrens) {
    vnode.childrens.forEach((child) => render(child, dom));
  }
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
