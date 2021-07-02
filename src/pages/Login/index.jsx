import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import React, { useEffect } from 'react';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { connect, history } from 'umi';
import styles from './index.less';

const Login = (props) => {
  const { submitting, dispatch } = props;
  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) history.replace('/');
  }, []);
  return (
    <div className={styles.main}>
      <ProForm
        initialValues={{
          autoLogin: true,
        }}
        submitter={{
          render: (_, dom) => dom.pop(),
          submitButtonProps: {
            loading: submitting,
            size: 'large',
            style: {
              width: '100%',
            },
          },
        }}
        onFinish={(values) => {
          dispatch({
            type: 'login/login',
            payload: { ...values },
          });
          return Promise.resolve();
        }}
      >
        <Tabs activeKey="account">
          <Tabs.TabPane key="account" tab="账户密码登录" />
        </Tabs>
        <ProFormText
          name="userName"
          fieldProps={{
            size: 'large',
            prefix: <UserOutlined className={styles.prefixIcon} />,
          }}
          placeholder="账号 : admin or user"
          rules={[
            {
              required: true,
              message: '请填写账号 !',
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined className={styles.prefixIcon} />,
          }}
          placeholder="密码 : 123456"
          rules={[
            {
              required: true,
              message: '请填写用户密码 !',
            },
          ]}
        />
      </ProForm>
    </div>
  );
};
export default connect(({ login, loading }) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))(Login);
