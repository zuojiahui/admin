import React from 'react';
import { Card, Avatar } from 'antd';
import './style.css';

const ProjectLiset = () => {
  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };

  return (
    <Card
      title={
        <div className="rojectLiset-title">
          <span>进行中的项目</span>
          <span className="rojectLiset-title-all">全部项目</span>
        </div>
      }
    >
      <Card.Grid style={gridStyle}>
        <Card bordered={false}>
          <div className="rojectLiset-avatar">
            <Avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            <span className="rojectLiset-avatar-titile">React</span>
          </div>
          <div className="rojectLiset-describe">生命就像一盒巧克力，结果往往出人意料</div>
          <div className="rojectLiset-personnel">
            <span style={{ cursor: 'pointer' }}>全组都是吴彦祖</span> <span>4小时前</span>
          </div>
        </Card>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Card bordered={false}>
          <div className="rojectLiset-avatar">
            <Avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            <span className="rojectLiset-avatar-titile">React</span>
          </div>
          <div className="rojectLiset-describe">生命就像一盒巧克力，结果往往出人意料</div>
          <div className="rojectLiset-personnel">
            <span style={{ cursor: 'pointer' }}>全组都是吴彦祖</span> <span>4小时前</span>
          </div>
        </Card>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Card bordered={false}>
          <div className="rojectLiset-avatar">
            <Avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            <span className="rojectLiset-avatar-titile">React</span>
          </div>
          <div className="rojectLiset-describe">生命就像一盒巧克力，结果往往出人意料</div>
          <div className="rojectLiset-personnel">
            <span style={{ cursor: 'pointer' }}>全组都是吴彦祖</span> <span>4小时前</span>
          </div>
        </Card>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Card bordered={false}>
          <div className="rojectLiset-avatar">
            <Avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            <span className="rojectLiset-avatar-titile">React</span>
          </div>
          <div className="rojectLiset-describe">生命就像一盒巧克力，结果往往出人意料</div>
          <div className="rojectLiset-personnel">
            <span style={{ cursor: 'pointer' }}>全组都是吴彦祖</span> <span>4小时前</span>
          </div>
        </Card>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Card bordered={false}>
          <div className="rojectLiset-avatar">
            <Avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            <span className="rojectLiset-avatar-titile">React</span>
          </div>
          <div className="rojectLiset-describe">生命就像一盒巧克力，结果往往出人意料</div>
          <div className="rojectLiset-personnel">
            <span style={{ cursor: 'pointer' }}>全组都是吴彦祖</span> <span>4小时前</span>
          </div>
        </Card>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Card bordered={false}>
          <div className="rojectLiset-avatar">
            <Avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            <span className="rojectLiset-avatar-titile">React</span>
          </div>
          <div className="rojectLiset-describe">生命就像一盒巧克力，结果往往出人意料</div>
          <div className="rojectLiset-personnel">
            <span style={{ cursor: 'pointer' }}>全组都是吴彦祖</span> <span>4小时前</span>
          </div>
        </Card>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Card bordered={false}>
          <div className="rojectLiset-avatar">
            <Avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            <span className="rojectLiset-avatar-titile">React</span>
          </div>
          <div className="rojectLiset-describe">生命就像一盒巧克力，结果往往出人意料</div>
          <div className="rojectLiset-personnel">
            <span style={{ cursor: 'pointer' }}>全组都是吴彦祖</span> <span>4小时前</span>
          </div>
        </Card>
      </Card.Grid>
      <Card.Grid style={gridStyle}>
        <Card bordered={false}>
          <div className="rojectLiset-avatar">
            <Avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            <span className="rojectLiset-avatar-titile">React</span>
          </div>
          <div className="rojectLiset-describe">生命就像一盒巧克力，结果往往出人意料</div>
          <div className="rojectLiset-personnel">
            <span style={{ cursor: 'pointer' }}>全组都是吴彦祖</span> <span>4小时前</span>
          </div>
        </Card>
      </Card.Grid>
    </Card>
  );
};
export default ProjectLiset;
