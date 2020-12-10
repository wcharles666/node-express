import axios from 'axios';

export const runCallBack = callBack => {
  callBack();
};

export const createObject = classItem => {
  new classItem();
};

export const getData = () => {
  return axios.get('/api').then(res => res.data);
};
