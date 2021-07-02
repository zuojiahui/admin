import { history } from 'umi';
import { fakeAccountLogin } from '@/services/login';
import { message } from 'antd';

const Model = {
  namespace: 'login',
  state: {
    status: undefined,
  },
  effects: {
    // 登录
    *login({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);
      if (response && response.status === 'ok') {
        yield put({
          type: 'changeLoginStatus',
          payload: response,
        });
        message.success('🎉 🎉 🎉  登录成功！');
        history.replace('/');
      } else if (response.status === 'error') {
        message.error('👺 👺 👺 请输入正确的账号密码！');
      }
    },
    // 退出
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
      history.replace('/login');
    },
  },
  reducers: {
    changeLoginStatus(state, { payload }) {
      localStorage.setItem('token', payload.token);
      return { ...state };
    },
  },
};
export default Model;
