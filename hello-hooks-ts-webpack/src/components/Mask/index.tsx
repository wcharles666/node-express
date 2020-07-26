import React from 'react';
import { Button } from 'antd';

const Mask = () => {
  const deleteTodo = () => {
    console.log('dsakhdjsh');
  };
  return (
    <div className="div">
      <span className="item-text ">dsahdhs</span>
      <Button onClick={() => deleteTodo()}>done</Button>
    </div>
  );
};

export default Mask;
