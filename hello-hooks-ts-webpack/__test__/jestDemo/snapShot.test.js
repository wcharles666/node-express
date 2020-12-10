import { genneratorConfig, genneratorConfig1 } from '../../src/jestDemo/snapShot';

// 普通写法
// test('测试配置文件快照 ', () => {
//   expect(genneratorConfig()).toEqual({
//     server: 'http://wwww.baidu.com',
//     port: 8080,
//   });
// });

// 快照写法
test('测试配置文件快照1snap ', () => {
  expect(genneratorConfig()).toMatchSnapshot({
    time: expect.any(Date),
  });
});

test('测试配置文件快照2snap ', () => {
  expect(genneratorConfig1()).toMatchSnapshot({
    time: expect.any(Date),
  });
});

test('测试配置文件快照2snap 显示在行内测试用例文件中 ', () => {
  expect(genneratorConfig1()).toMatchInlineSnapshot(
    {
      time: expect.any(Date),
    },
    `
    Object {
      "port": 8080,
      "server": "http://wwww.baidu.com",
      "time": Any<Date>,
    }
  `
  );
});
