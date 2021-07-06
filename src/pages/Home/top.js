import React from 'react';
import { Card, Avatar, Statistic, Row, Col } from 'antd';
import './style.css';

const { Meta } = Card;
const Top = () => {
  return (
    <Card className="top-Card">
      <Row>
        <Col span={16}>
          <Meta
            avatar={
              <div className="top-img-box">
                <Avatar
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            }
            title="早安，猪猪侠，祝你开心每一天！"
            description="交互专家 | 蚂蚁集团－某某某事业群－某某平台部－某某技术部－UED"
            className="top-Meta"
          />
        </Col>
        <Col span={8}>
          <div className="top-Statistic-box">
            <Statistic title="项目数" value={93} className="top-Statistic" />
            <Statistic title="团队内排名" value={93} suffix="/ 100" className="top-Statistic" />
            <Statistic title="团队内排名" value={93} className="top-Statistic" />
          </div>
        </Col>
      </Row>
    </Card>
  );
};
export default Top;
