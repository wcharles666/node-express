const Reac = {
  createElement,
};

const createElement = (tag, attrs, ...children) => {
  return {
    tags,
    attrs,
    childrens,
  };
};

// const ele = (
//   <div className="active" title="titles">
//     hello,<span>react</span>
//     <h1>love</h1>
//   </div>
// );

/*
  React.createElement(tag, {attr1, attr2, child1,child2,child3})
*/

var ele = React.createElement(
  "div",
  {
    className: "active",
    title: "titles",
  },
  "hello,",
  React.createElement("span", null, "react"),
  React.createElement("h1", null, "love")
);
