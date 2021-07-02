import { queryCurrent, query as queryUsers } from '@/services/user';

const UserModel = {
  namespace: 'user',
  state: {
    currentUser: {},
  },
  effects: {
    // 用户信息
    *fetchCurrent(_, { call, put }) {
      let userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (!userInfo) {
        userInfo = yield call(queryCurrent);
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
      }
      yield put({
        type: 'upData',
        payload: { currentUser: userInfo },
      });
    },
  },
  reducers: {
    upData(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
export default UserModel;
