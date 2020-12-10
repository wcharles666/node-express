import axios from 'axios';

export const fetchData = (fn: any) => {
  // axios.get('http://www.dell-lee.com/react/api/demo.json');
  axios.get('http://www.dell-lee.com/react/api/demo.json').then(res => {
    fn(res.data);
  });
  // axios.get('http://127.0.0.1:3000/apiData/test.json').then(res => {
  //   fn(res.data);
  // });
};

export const fetchDataPromise = () => {
  // axios.get('http://www.dell-lee.com/react/api/demo.json');
  return axios.get('http://www.dell-lee.com/react/api/demo.json');
  // axios.get('http://127.0.0.1:3000/apiData/test.json').then(res => {
  //   fn(res.data);
  // });
};

export const fetchDataNotFound = () => {
  // axios.get('http://www.dell-lee.com/react/api/demo.json');
  return axios.get('http://www.dell-lee.com/react/api/demo3.json');
};

export const fetchDataResolve = () => {
  // axios.get('http://www.dell-lee.com/react/api/demo.json');
  return axios.get('http://www.dell-lee.com/react/api/demo.json');
};
