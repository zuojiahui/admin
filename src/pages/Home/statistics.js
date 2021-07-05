import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import { ChartCard } from './components/Charts';
import { TinyArea, TinyColumn, Progress } from '@ant-design/charts';
import { InfoCircleOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
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
    data,
    height: 30,
    areaStyle: { fill: '#18e184f0' },
  };
  const config2 = {
    data,
    height: 30,
  };
  const config3 = {
    height: 30,
    autoFit: true,
    color: ['#b86aa0', '#E8EDF3'],
    annotations: [
      {
        type: 'line',
        start: ['80%', '0%'],
        end: ['80%', '100%'],
        style: {
          stroke: '#f00',
          lineWidth: 2,
        },
      },
    ],
  };
  return (
    <Fragment>
      <Row gutter={16}>
        <Col span={6}>
          <ChartCard
            hoverable
            title={() => (
              <div className="top-content">
                <span>总销售额</span>
                <span>
                  <InfoCircleOutlined style={{ color: '#3a8fe6' }} />
                </span>
              </div>
            )}
            total="¥ 126,560"
            child={() => (
              <div className="child-content">
                <div>
                  <span>周同比</span>
                  <span>
                    11% <CaretUpOutlined style={{ color: 'red' }} />
                  </span>
                </div>
                <div>
                  <span>
                    日同比 <CaretDownOutlined style={{ color: 'green' }} />
                  </span>
                  <span>12%</span>
                </div>
              </div>
            )}
            footer={() => (
              <div>
                <span style={{ marginRight: 8 }}>日销售额</span>
                <span>¥ 6,560</span>
              </div>
            )}
          />
        </Col>
        <Col span={6}>
          <ChartCard
            hoverable
            total="¥ 126,560"
            child={() => <TinyArea {...config} />}
            title={() => (
              <div className="top-content">
                <span>访问量</span>
                <span>
                  <InfoCircleOutlined style={{ color: '#3a8fe6' }} />
                </span>
              </div>
            )}
            footer={() => (
              <div>
                <span style={{ marginRight: 8 }}>日访问量</span>
                <span>126,560</span>
              </div>
            )}
          />
        </Col>
        <Col span={6}>
          <ChartCard
            hoverable
            total="¥ 126,560"
            child={() => <TinyColumn {...config2} />}
            title={() => (
              <div className="top-content">
                <span>支付笔数</span>
                <span>
                  <InfoCircleOutlined style={{ color: '#3a8fe6' }} />
                </span>
              </div>
            )}
            footer={() => (
              <div>
                <span style={{ marginRight: 8 }}>转换率</span>
                <span>80%</span>
              </div>
            )}
          />
        </Col>
        <Col span={6}>
          <ChartCard
            hoverable
            title={() => (
              <div className="top-content">
                <span>运营活动效果</span>
                <span>
                  <InfoCircleOutlined style={{ color: '#3a8fe6' }} />
                </span>
              </div>
            )}
            total="80%"
            child={() => <Progress {...config3} />}
            footer={() => (
              <div className="footer-content">
                <div>
                  <span>周同比</span>
                  <span>
                    11% <CaretUpOutlined style={{ color: 'red' }} />
                  </span>
                </div>
                <div>
                  <span>
                    日同比 <CaretDownOutlined style={{ color: 'green' }} />
                  </span>
                  <span>12%</span>
                </div>
              </div>
            )}
          />
        </Col>
      </Row>
    </Fragment>
  );
};
export default Statistics;
