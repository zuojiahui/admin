import React from 'react';
import { Card, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './style.css';

const Quick = () => {
  return (
    <Card title="便捷导航" className="quick-card">
      <div className="quick-box">
        <a className="quick-content">快捷方式</a>
        <a className="quick-content">快捷方式</a>
        <a className="quick-content">快捷方式</a>
        <a className="quick-content">快捷方式</a>
        <div style={{ padding: 12 }}>
          <Button type="primary" ghost size="small" icon={<PlusOutlined />}>
            添加
          </Button>
        </div>
      </div>
    </Card>
  );
};
export default Quick;
