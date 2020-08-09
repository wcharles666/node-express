import { sum } from '../../src/jestDemo/sum.js';
import { ExceptionMap } from 'antd/lib/result';

// matchers

//  匹配器1 toBe
test('adds 1 + 2 to equal 3', () => {
  // toBe 匹配器1 matchers
  // const a = { one: 1 };
  expect(sum(1, 2)).toBe(3);
  //  expect(a).toBe({ one: 1 });
});

// 匹配器2 toEqual

test('测试对象内容相等', () => {
  // toEqual 匹配器
  const a = { one: 1 };
  expect(a).toEqual({ one: 1 });
});

//  匹配器3 toBeNull

test('测试是不是为null', () => {
  const a = null;
  expect(a).toBeNull();
});

// 匹配器4 toBeUndefined

test('测试是不是undefiend', () => {
  const a = undefined;
  expect(a).toBeUndefined();
});

// 匹配器5 toBeDefined

test('测试是不是被定义过', () => {
  const a = 21;
  expect(a).toBeDefined();
});

// 匹配器6 toBeTruthy

test('测试是不是为真', () => {
  const a = true;
  expect(a).toBeTruthy();
});

// 匹配器7 toBeFalsy

test('测试是不是为假', () => {
  const a = false;
  expect(a).toBeFalsy();
});

// 匹配器8 not

test('not 匹配器', () => {
  const a = 1;
  //expect(a).not.toBeTruthy();
  expect(a).not.toBeFalsy();
});

/*
 * 数字相关的匹配器
 */

// 匹配器9 toBeGreaterThan

test('数字比谁大', () => {
  const counter = 12;
  expect(counter).toBeGreaterThan(11);
});

// 匹配器10 toBeLessThan

test('数字比谁小', () => {
  const counter = 10;
  expect(counter).toBeLessThan(11);
});

// 匹配器11 toBeGreaterThanOrEqual

test('数字大于或等于 ', () => {
  const counter = 12;
  expect(counter).toBeGreaterThanOrEqual(11);
});

// 匹配器12 toBeCloseTo

test('数字大于或等于 ', () => {
  const firstNumber = 0.1;
  const secondNum = 0.2;
  expect(firstNumber + secondNum).toBeCloseTo(0.3);
});

/*
 * string相关的匹配器
 */

// 匹配器12 toMatch

test('是否包含某个字符串', () => {
  const str = 'http://www.baidu.com';
  expect(str).toMatch('www');
});

/*
 * Array,set相关的匹配器
 */

// 匹配器13 toContain

test('是否包含数组的某一项', () => {
  const arr = ['dell', 'less', 'immoc'];
  // const data = new Set(arr);
  expect(arr).toContain('less');
});

// 异常

const throwNewEttorFunc = () => {
  throw new Error('this is a new error');
};

// 匹配器14 toThrow 抛出异常

test('是否抛出异常', () => {
  expect(throwNewEttorFunc).toThrow('this is a new error');
});



