// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"react-dom/diff.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diffNode = exports.diff = void 0;

var _diffPart = require("./diffPart");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var diff = function diff(dom, vnode, container) {
  // 对比节点的变化,将对比后的节点返回
  var ret = diffNode(dom, vnode);
  console.log("ret", ret);

  if (container) {
    container.appendChild(ret);
  }

  return ret;
}; // 对比真实dom和虚拟dom


exports.diff = diff;

var diffNode = function diffNode(dom, vnode) {
  // console.log("====================================");
  // console.log(dom);
  // console.log(vnode, "sd");
  // console.log("====================================");
  var out = dom;
  if (vnode === undefined || vnode === null || typeof vnode === "boolean") vnode = "";
  if (typeof vnode === "number") vnode = String(vnode); // 如果vnode是字符串

  if (typeof vnode === "string") {
    if (dom && dom.nodeType === 3) {
      if (dom.textContent !== vnode) {
        //更新文本内容
        dom.textContent = vnode;
      }
    } else {
      // dom为undefine时
      out = document.createTextNode(vnode);

      if (dom && dom.parentNode) {
        dom.parentNode.replaceNode(out, dom);
      }
    }

    return out;
  }

  if (typeof vnode.tag === "function") {
    return diffComponent(out, vnode);
  } //  非文本DOM节点


  if (!dom) {
    out = document.createElement(vnode.tag);
  } // 比较子节点(dom节点和组件)


  if (vnode.childrens && vnode.childrens.length > 0 || out.childNodes && out.childNodes.length > 0) {
    // 对比组件 或者子节点
    diffChildren(out, vnode.childrens);
  }

  diffAttribute(out, vnode);
  return out;
};

exports.diffNode = diffNode;

var diffComponent = function diffComponent(dom, vnode) {
  var comp = dom; // 如果组件没有变化,重新设置props

  if (comp && comp.constructor === vnode.tag) {
    // 重新设置props
    (0, _diffPart.setComponentProps)(comp, vnode.attrs); // 赋值

    dom = comp.base;
  } else {
    // 组件类型发生变化
    if (comp) {
      // 先移除旧的组件
      unmountComonent(comp); // 释放comp

      comp = null;
    } // 1.创建新组件


    comp = (0, _diffPart.createComponent)(vnode.tag, vnode.attrs); // 2.设置组件属性

    (0, _diffPart.setComponentProps)(comp, vnode.attrs); // 3.给当前挂载base

    dom = comp.base;
  }

  return dom;
};

var unmountComonent = function unmountComonent(comp) {
  removeNode(comp.base);
};

var removeNode = function removeNode(dom) {
  if (dom && dom.parentNode) {
    dom.parentNode.removeNode(dom);
  }
};

var diffChildren = function diffChildren(dom, vchildren) {
  // dom 真实节点 vchildren为数组
  var domChildren = dom.childNodes;
  var children = [];
  var keyed = {}; // 将有key的节点(用对象保存)和没有key的节点(用数组保存)分开

  if (domChildren.length > 0) {
    _toConsumableArray(domChildren).forEach(function (item) {
      // 获取key
      var key = item.key;

      if (key) {
        // 如果key存在,保存到对象中
        keyed[key] = item;
      } else {
        // 如果key不存在,保存到数组中
        children.push(item);
      }
    });
  }

  if (vchildren && vchildren.length > 0) {
    // 对子节点有增加 删除 的操作, 加入属性key 作为标识
    var min = 0;
    var childrenLen = children.length;

    _toConsumableArray(vchildren).forEach(function (vchild, i) {
      // 获取虚拟DOM中所有的key
      var key = vchild.key;
      var child;

      if (key) {
        // 如果有key,找到对应key值的节点
        if (keyed[key]) {
          child = keyed[key];
          keyed[key] = undefined;
        }
      } else if (childrenLen > min) {
        // 如果没有key,则优先找类型相同的节点
        for (var j = min; j < childrenLen; j++) {
          var c = children[j];

          if (c) {
            child = c;
            children[j] = undefined;
            if (j === childrenLen - 1) childrenLen--;
            if (j === min) min++;
            break;
          }
        }
      } // 对比


      child = diffNode(child, vchild); // 更新DOM

      var f = domChildren[i];

      if (child && child !== dom && child !== f) {
        // 如果更新前的对应位置为空，说明此节点是新增的
        if (!f) {
          dom.appendChild(child); // 如果更新后的节点和更新前对应位置的下一个节点一样，说明当前位置的节点被移除了
        } else if (child === f.nextSibling) {
          removeNode(f); // 将更新后的节点移动到正确的位置
        } else {
          // 注意insertBefore的用法，第一个参数是要插入的节点，第二个参数是已存在的节点
          dom.insertBefore(child, f);
        }
      }
    });
  }
};

var diffAttribute = function diffAttribute(dom, vnode) {
  // 保存之前的DOM的所有属性
  var oldAttrs = {};
  var newAttrs = vnode.attrs; //dom 是原有的节点对象  vnode 虚拟DOM
  // const idDomAttr = document.querySelector("#root").attributes;
  // console.log(idDomAttr, "idDomAttr");
  // console.log("domAttrs");

  var domAttrs = dom.attributes;

  _toConsumableArray(domAttrs).forEach(function (item) {
    // 获取节点对象的属性
    console.log(item.name, item.value);
    oldAttrs[item.name] = item.value;
  }); // 比较
  // 如果原来属性跟新的属性对比,不在新的属性中,则将其移除掉 (属性值为undefined)


  for (var key in oldAttrs) {
    if (!(key in newAttrs)) {
      (0, _diffPart.setAttribute)(dom, key, undefined);
    }
  } // 更新 class='active'  abc


  for (var _key in newAttrs) {
    if (oldAttrs[_key] !== newAttrs[_key]) {
      // 值不同,更新值
      (0, _diffPart.setAttribute)(dom, _key, newAttrs[_key]);
    }
  }
};
},{"./diffPart":"react-dom/diffPart.js"}],"react-dom/diffPart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setAttribute = exports.renderComponent = exports.setComponentProps = exports.createComponent = void 0;

var _componentNormalDiff = _interopRequireDefault(require("../react/componentNormalDiff"));

var _diff = require("./diff");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// import React from "../react";
// const render = (vnode, container) => {
//   // console.log(typeof vnode);
//   // console.log(vnode, "dsds");
//   // console.log(container, "dsds");
//   return container.appendChild(_render(vnode));
// };
var render = function render(vnode, container, dom) {
  // 开始起初dom为undefined
  console.log(vnode, container, dom); // console.log(typeof vnode);
  // console.log(vnode, "dsds");
  // console.log(container, "dsds");

  return (0, _diff.diff)(dom, vnode, container);
};

var createComponent = function createComponent(comp, props) {
  // function是可以直接调用的，但是class是需要通过new去创建一个实例来使用的
  // 通过判定原型是否有render方法进行判别是否为class组件
  // instanceof就是通过原型链来进行类型判断的,因此我们可以直接采用instanceof来进行判断
  // 我们能否只检测 React.Component 的后代呢？
  var inst; // if (comp.prototype && comp.prototype instanceof React.Component) {

  if (comp.prototype && comp.prototype.render) {
    console.log("类组件吗", comp); // 如果是类定义的组件, 则创建新的实例,返回

    inst = new comp(props);
  } else {
    // 如果是函数组件,将函数组件扩展为类组件，方便后面统一管理
    inst = new _componentNormalDiff.default(props);
    inst.constructor = comp; // 定义render函数

    inst.render = function () {
      return this.constructor(props);
    };
  }

  return inst;
};

exports.createComponent = createComponent;

var setComponentProps = function setComponentProps(comp, props) {
  if (!comp.base) {
    if (comp.componentWillMount) comp.componentWillMount();
  } else if (comp.componentWillReceiveProps) {
    comp.componentWillReceiveProps();
  } // 设置组件属性


  comp.props = props; // 渲染组件

  renderComponent(comp);
};

exports.setComponentProps = setComponentProps;

var renderComponent = function renderComponent(comp) {
  var base; // 调用render，返回jsx对象

  var renderer = comp.render(); // 重新渲染时,需要diff一下
  // base = _render(renderer);

  base = (0, _diff.diffNode)(comp.base, renderer);

  if (comp.base && comp.componentWillUpdate) {
    comp.componentWillUpdate();
  }

  if (comp.base) {
    if (comp.componentDidUpdate) comp.componentDidUpdate();
  } else if (comp.componentDidMount) {
    comp.componentDidMount();
  } // 节点替换
  // if (comp.base && comp.base.parentNode) {
  //   comp.base.parentNode.replaceChild(base, comp.base);
  // }


  comp.base = base;
};
/*
  添加属性
*/


exports.renderComponent = renderComponent;

var setAttribute = function setAttribute(dom, key, value) {
  // 将属性名className 转换为class
  if (key === "className") {
    key = "class";
  } // 如果是事件 onClick...


  if (/on\w+/.test(key)) {
    // 转为小写
    key = key.toLowerCase();
    dom[key] = value || "";
  } else if (key === "style") {
    if (!value || typeof value === "string") {
      dom.style.cssText = value || "";
    } else if (value && _typeof(value) === "object") {
      // style={{ width: 20 }}
      for (var k in value) {
        if (typeof value[k] === "number") {
          dom.style[k] = "".concat(value[k], "px");
        } else {
          dom.style[k] = "".concat(value[k]);
        }
      }
    }
  } else {
    // 其它属性
    if (key in dom) {
      dom[key] = value || "";
    } // value有值的话, 更新属性


    if (value) {
      dom.setAttribute(key, value);
    } else {
      // 无值移除属性
      dom.removeAttribute(key);
    }
  }
};

exports.setAttribute = setAttribute;
var ReactDOM = {
  render: render
};
var _default = ReactDOM;
exports.default = _default;
},{"../react/componentNormalDiff":"react/componentNormalDiff.js","./diff":"react-dom/diff.js"}],"react/set_state_queue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enqueueSetState = void 0;

var _diffPart = require("../react-dom/diffPart");

// 1. 异步更新State,短时间内把多个State合并为一个(队列) 先进先出
// 2.一段时间之后，循环清空队列,渲染组件
// 数组模拟队列
var setStateQueue = []; // 保存当前组件

var renderQueue = [];

var defer = function defer(fn) {
  return Promise.resolve().then(fn);
};

var enqueueSetState = function enqueueSetState(stateChange, component) {
  if (setStateQueue.length === 0) {
    // setTimeout(() => {
    //   flush();
    // }, 0);
    defer(flush);
  } // 1.短时间内合并多个SetState;


  setStateQueue.push({
    stateChange: stateChange,
    component: component
  }); //  如果renderQueue里面没有组件, 添加到队列中

  var r = renderQueue.some(function (item) {
    return item === component;
  });

  if (!r) {
    // 证明第一次添加
    renderQueue.push(component);
  }
}; // 一段时间之后


exports.enqueueSetState = enqueueSetState;

var flush = function flush() {
  var item, component; // 对列中已有值
  // while ((item = setStateQueue.pop())) {

  while (item = setStateQueue.shift()) {
    // console.log(item, "dsd");
    var _item = item,
        stateChange = _item.stateChange,
        _component = _item.component; // 保存之前的状态

    if (!_component.prevState) {
      _component.prevState = Object.assign({}, _component.state);
    }

    if (typeof stateChange === "function") {
      //  如果为函数
      Object.assign(_component.state, stateChange(_component.prevState, _component.props));
    } else {
      Object.assign(_component.state, stateChange);
    } // 赋值


    _component.prevState = _component.state;
  }

  while (component = renderQueue.shift()) {
    (0, _diffPart.renderComponent)(component);
  }
};
},{"../react-dom/diffPart":"react-dom/diffPart.js"}],"react/componentNormalDiff.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _diffPart = require("../react-dom/diffPart");

var _set_state_queue = require("./set_state_queue");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Component = /*#__PURE__*/function () {
  function Component() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Component);

    this.props = props;
    this.state = {};
  }

  _createClass(Component, [{
    key: "setState",
    value: function setState(stateChange) {
      // console.log(stateChange, "stateChange");
      // // 直接简单一点，进行浅拷贝
      // // 对象拷贝
      // Object.assign(this.state, stateChange);
      // 状态改变, 渲染组件
      // renderComponent(this);
      // console.log("stateChange", stateChange);
      // console.log(this);
      (0, _set_state_queue.enqueueSetState)(stateChange, this);
    }
  }]);

  return Component;
}();

var _default = Component;
exports.default = _default;
},{"../react-dom/diffPart":"react-dom/diffPart.js","./set_state_queue":"react/set_state_queue.js"}],"react/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _componentNormalDiff = _interopRequireDefault(require("./componentNormalDiff"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Component from "./component";
var createElement = function createElement(tag, attrs) {
  attrs = attrs || {};

  for (var _len = arguments.length, childrens = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    childrens[_key - 2] = arguments[_key];
  }

  return {
    tag: tag,
    // 外层的标签
    attrs: attrs,
    // 属性 对象
    childrens: childrens,
    // 子元素 数组
    key: attrs.key || null // diff

  };
};

var React = {
  createElement: createElement,
  Component: _componentNormalDiff.default
};
var _default = React;
exports.default = _default;
},{"./componentNormalDiff":"react/componentNormalDiff.js"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"index.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"indexDiff.js":[function(require,module,exports) {
"use strict";

var _react = _interopRequireDefault(require("./react"));

var _diffPart = _interopRequireDefault(require("./react-dom/diffPart"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

//  核心: 组件化开发
// 1.为什么ReactDOM.render() 必须要引入React?
// 2.组件： 函数组件 类组件
var ClassComponet = /*#__PURE__*/function (_React$Component) {
  _inherits(ClassComponet, _React$Component);

  var _super = _createSuper(ClassComponet);

  function ClassComponet(props) {
    var _this;

    _classCallCheck(this, ClassComponet);

    _this = _super.call(this, props);
    _this.state = {
      number: 0
    };
    return _this;
  }

  _createClass(ClassComponet, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log("组将将要加载");
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      //  this.handleIncrement();
      // for (let i = 0; i < 100; i++) {
      //   this.setState({
      //     number: this.state.number + 1,
      //   });
      //   // this.setState((prevState, prevProps) => {
      //   //   console.log(prevState.number);
      //   //   return {
      //   //     number: prevState.number + 1,
      //   //   };
      //   // });
      //   console.log(this.state.num);
      // }
      console.log("组件加载完成");
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      console.log("props");
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      console.log("组件将要更新");
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log("组件更新完成");
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      // 修改状态的唯一方法是调用setState
      this.setState({
        number: this.state.number + 1
      }); // this.setState((prevState) => {
      //   return { number: prevState.number + 1 };
      // });

      console.log(this.state.number);
    }
  }, {
    key: "handleIncrement",
    value: function handleIncrement() {
      this.handleClick();
      this.handleClick();
      this.handleClick();
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "active"
      }, _react.default.createElement("p", null, "\u6211\u662F\u7C7B\u7EC4\u4EF6"), _react.default.createElement("p", null, "\u6570\u91CF", this.state.number), _react.default.createElement("button", {
        onClick: this.handleIncrement.bind(this)
      }, "\u70B9\u51FB\u6211"));
    }
  }]);

  return ClassComponet;
}(_react.default.Component); // 类组件


_diffPart.default.render(_react.default.createElement(ClassComponet, {
  name: "home"
}), document.getElementById("root"));
},{"./react":"react/index.js","./react-dom/diffPart":"react-dom/diffPart.js","./index.css":"index.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49526" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","indexDiff.js"], null)
//# sourceMappingURL=/indexDiff.79db76d9.js.map