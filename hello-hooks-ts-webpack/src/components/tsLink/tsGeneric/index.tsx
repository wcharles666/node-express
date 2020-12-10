import React, { useEffect } from 'react';
import './index.less';
import { dipatchLeftSide } from '@/config/commonMethods';

const TsGeneric = props => {
  function identity<T>(arg: T): T {
    return arg;
  }

  function identity2<T>(arg: Array<T>): Array<T> {
    return arg;
  }

  // 函数变量命名方式

  let myIdentity: <T>(arg: T) => T = identity;
  let myIdentity22: { <T>(arg: T): T } = identity;

  interface GenericIdentityFn<T> {
    <T>(arg: T): T;
  }
  let myIdenefef: GenericIdentityFn = identity;

  console.log(myIdenefef, 'myIdenefef');

  console.log(myIdentity, 'dsds');

  let output = identity<String>('myString');
  let output1 = identity('myString');

  interface GenericIdentityFn1<T> {
    (arg: T): T;
  }

  function idereg<T>(arg: T): T {
    return arg;
  }

  let myIdentity333: GenericIdentityFn1<number> = idereg;
  console.log(output);

  interface LengthWise {
    length: number;
  }

  function loggs<T extends LengthWise>(arg: T): T {
    console.log(arg.length);
    return arg;
  }

  console.log(loggs({ length: 10, value: 3 }));

  console.log(loggs, 'loggs');

  function getProperty(obj: T, key: K) {
    return obj[key];
  }

  let x = { a: 1, b: 2, c: 3, d: 4 };

  getProperty(x, 'a');
  getProperty(x, 'm');

  dipatchLeftSide(props);
  return <div className="tsGeneric">ts泛型</div>;
};

export default TsGeneric;
