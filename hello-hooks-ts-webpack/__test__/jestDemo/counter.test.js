import Counter from '../../src/jestDemo/counter';

let counter = null;
// 所有测试用例调用之前
beforeAll(() => {
  console.log('beforeAll');
});

beforeEach(() => {
  // 每个测试用例测试之前都会执行
  console.log('beforeEach');
  counter = new Counter();
});

afterEach(() => {
  // 每个测试用例测试执行之后都会执行
  console.log('afterEach', 'sdsds');
});
// 所有测试用例调用之后
afterAll(() => {});

/**
 * 实际应用代码编写中 我们会将Add的方法写在一起进行归类
 * — 将每类的方法划分在一个文件中
 * - 使用jest提供的describe(分组)的方法
 */
// test('测试 Counter中的方法addOne', () => {
//   console.log('sdsd', counter);
//   counter.addOne();
//   expect(counter.number).toBe(1);
// });

// test('测试 Counter中的方法addTwoOne', () => {
//   console.log('sdsd', counter);
//   counter.addTwo();
//   expect(counter.number).toBe(2);
// });

// test('测试 Counter中minus方法', () => {
//   console.log('sdsd-minus', counter);
//   counter.minusOne();
//   expect(counter.number).toBe(-1);
// });
// test('测试 Counter中minus方法', () => {
//   console.log('sdsd-minus', counter);
//   counter.minusTwo();
//   expect(counter.number).toBe(-2);
// });

describe('测试增加相关的代码', () => {
  test('测试 Counter中的方法addOne', () => {
    console.log('sdsd', counter);
    counter.addOne();
    expect(counter.number).toBe(1);
  });
  test('测试 Counter中的方法addTwoOne', () => {
    console.log('sdsd', counter);
    counter.addTwo();
    expect(counter.number).toBe(2);
  });
});

describe('测试减少相关的代码', () => {
  beforeEach(() => {
    console.log('内部的beforeEach');
  });
  // test.only('测试 Counter中minus方法', () => {
  //   console.log('sdsd-minus', counter);
  //   counter.minusOne();
  //   expect(counter.number).toBe(-1);
  // });
  test('测试 Counter中minus方法', () => {
    console.log('sdsd-minus', counter);
    counter.minusOne();
    expect(counter.number).toBe(-1);
  });
  test('测试 Counter中minus方法', () => {
    console.log('sdsd-minus', counter);
    counter.minusTwo();
    expect(counter.number).toBe(-2);
  });
});

/**
 * 每个describe下面都可以有自己的钩子
 * test.only添加就只执行当前的测试用例
 * 如果写在非describe 钩子里的 无关代码 会依次优先执行
 */
