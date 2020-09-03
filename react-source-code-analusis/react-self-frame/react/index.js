// import Component from "./component";
import Component from "./componentNormalDiff";

const createElement = (tag, attrs, ...childrens) => {
  attrs = attrs || {};
  return {
    tag, // 外层的标签
    attrs, // 属性 对象
    childrens, // 子元素 数组
    key: attrs.key || null, // diff
  };
};

const React = {
  createElement,
  Component,
};

export default React;
