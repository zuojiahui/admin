import React, { Fragment } from 'react';
import { Card } from 'antd';
import { returnData } from '@/utils/type';
import '../../../style.css';

const ChartCard = (props) => {
  const { title, total, child, footer, ...rest } = props;
  const renderContent = () => {
    return (
      <Fragment>
        {/* 头部 */}
        {title && <div>{returnData(title)}</div>}

        {total && <div className="total">{returnData(total)}</div>}
        {/* 图表 */}
        {child && <div className="child">{returnData(child)}</div>}
        {/* 底部 */}
        {footer && <div className="footer">{returnData(footer)}</div>}
      </Fragment>
    );
  };
  return (
    <Card
      bodyStyle={{
        padding: '20px 24px 8px 24px',
      }}
      {...rest}
    >
      {renderContent()}
    </Card>
  );
};
export default ChartCard;
