import React from "./react";
import ReactDOM from "./react-dom/jsxPart";

import "./index.css";

const ele = (
  <div
    className="active"
    title="123"
    style={{ backgroundColor: "#89acec" }}
    onClick={() => {
      console.log("点击事件触发");
    }}
  >
    hello, <span>react</span>
    <p>你好</p>
  </div>
);

// console.log(ele, "ele");

ReactDOM.render(ele, document.getElementById("root"));
