import {
  fetchData,
  fetchDataPromise,
  fetchDataNotFound,
  fetchDataResolve,
} from '../../src/api/fetchData';

// 回调类型的异步测试
test('fetchData 返回结果为 {success: true}', done => {
  fetchData(data => {
    expect(data).toEqual({
      success: true,
    });
    done();
  });
});

// 返回Promise类型的异步测试
test('fetchDataPromise 返回结果为 {success: true}', () => {
  return fetchDataPromise().then(res => {
    expect(res.data).toEqual({
      success: true,
    });
  });
});

// 判断接口返回404
test('fetchData 返回结果为 404', () => {
  // 至少执行一次
  expect.assertions(1);
  return fetchDataNotFound().catch(e => {
    expect(e.toString().indexOf('404') > -1).toBe(true);
  });
});

//
test('fetchdata 返回结果为promise{success: true}', () => {
  return expect(fetchDataResolve()).resolves.toMatchObject({
    data: {
      success: true,
    },
  });
});

// 判断接口返回404 第2种
test('fetchdata 返回结果为404', () => {
  return expect(fetchDataNotFound()).rejects.toThrow();
});

// 失败接口 async await形式
test('fetchdata 返回结果为404', async () => {
  await expect(fetchDataNotFound()).rejects.toThrow();
});

// 成功接口 async await形式
test('fetchdata 返回结果为{succes: true}', async () => {
  const response = await fetchDataResolve();
  expect(response.data).toEqual({
    success: true,
  });
  // await expect(fetchDataResolve()).resolves.toMatchObject({
  //   data: {
  //     success: true,
  //   },
  // });
});

// 失败接口 async await形式 try catch
test('fetchdata 返回结果为404', async () => {
  expect.assertions(1);
  try {
    await fetchDataNotFound();
  } catch (err) {
    expect(err.toString()).toEqual('Error: Request failed with status code 404');
  }
});
