import React from 'react';
import { Card, Row, Col } from 'antd';
import './style.css';

const { Meta } = Card;
const Statistics = () => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={6}>
          <Card bordered={false} hoverable>
            Card content
            <Meta
              title="日销售额 ￥12,423"
              className="footerMeta"
              style={{ textAlign: 'center' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false} hoverable>
            Card content
            <Meta
              title="日访问量1,234"
              className="footerMeta"
              style={{ textAlign: 'center' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false} hoverable>
            Card content
            <Meta
              title="转化率60%"
              className="footerMeta"
              style={{ textAlign: 'center' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false} hoverable>
            Card content
            <Meta
              title="周同比12%日同比11%"
              className="footerMeta"
              style={{ textAlign: 'center' }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Statistics;
