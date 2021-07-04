import React, { Fragment } from 'react';
import { Card } from 'antd';
import '../../../style.css';

const ChartCard = (props) => {
  const { title, total, child, footer, ...rest } = props;
  const renderContent = () => {
    return (
      <div>
        {/* 头部 */}
        {title && <div>{title()}</div>}

        {total && <div className="total">{total}</div>}
        {child && <div className="child">{child()}</div>}
        {/* 底部 */}
        {footer && <div className="footer">{footer()}</div>}
      </div>
    );
  };
  return (
    <Fragment>
      <Card
        bodyStyle={{
          padding: '20px 24px 8px 24px',
        }}
        {...rest}
      >
        {renderContent()}
      </Card>
    </Fragment>
  );
};
export default ChartCard;
