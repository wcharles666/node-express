import { runCallBack, createObject, getData } from '../../src/jestDemo/mock';
import axios from 'axios';
// 对axios进行模拟前端发起ajax请求;
jest.mock('axios');

// mock函数的作用
// 1. 捕获函数的调用和返回结果，以及this和调用顺序
// 2. 它可以让我们自由的设置返回结果
// 3. 改变函数的内部实现

test('测试 runCallBack ', () => {
  // const func = () => {
  //   return 'hello';
  // };
  // const func = jest.fn(() => {
  //   return '456';
  // }); // mock函数,可以捕获函数的调用
  const func = jest.fn(); // mock函数,可以捕获函数的调用
  func.mockReturnValue('987'); // 2. 可以让我们自由的设置返回结果
  // func.mockImplementation(() => {
  //   console.log('shdksh');
  //   return 'dell';
  // });
  runCallBack(func);
  runCallBack(func);
  runCallBack(func);
  // expect(runCallBack(func)).toBe('hello');
  expect(func).toBeCalled();
  expect(func.mock.calls.length).toBe(3); // 断言
  // 传入的参数为shgdjsagd
  // expect(func.mock.calls[0]).toEqual(['987']);
  expect(func.mock.calls[0]).toEqual([]);
  console.log(func.mock);
});

test.only('测试 createObject', () => {
  const func = jest.fn();
  createObject(func);
  console.log(func.mock);
});

test.only('测试 getData', async () => {
  // mock的第三个用法是改变函数的内部实现
  axios.get.mockResolvedValue({ data: 'hello' });
  await getData().then(data => {
    expect(data).toBe('hello');
  });
});
