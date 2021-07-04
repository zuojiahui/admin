import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import { ChartCard } from './components/Charts';
import { TinyArea } from '@ant-design/charts';
import { InfoCircleOutlined } from '@ant-design/icons';
import './style.css';

const Statistics = () => {
  const data = [
    264,
    417,
    438,
    887,
    309,
    397,
    550,
    575,
    563,
    430,
    525,
    592,
    492,
    467,
    513,
    546,
    983,
    340,
    539,
    243,
    226,
    192,
  ];
  const config = {
    color: '#a8ddb5',
    height: 45,
    autoFit: true,
    data,
    areaStyle: { fill: '#d6e3fd' },
  };
  return (
    <Fragment>
      <Row gutter={16}>
        <Col span={6}>
          <ChartCard
            hoverable
            total="¥ 126,560"
            child={() => <TinyArea {...config} />}
            title={() => (
              <div className="top-content">
                <span>日销售额</span>
                <span>
                  <InfoCircleOutlined style={{ color: '#3a8fe6' }} />
                </span>
              </div>
            )}
            footer={() => (
              <div>
                <span style={{ marginRight: 8 }}>日销售额</span>
                <span>¥ 126,560</span>
              </div>
            )}
          />
        </Col>
      </Row>
    </Fragment>
  );
};
export default Statistics;
