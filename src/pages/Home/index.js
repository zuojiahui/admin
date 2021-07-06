import React, { Component, Fragment } from 'react';
import Top from './top';
import Statistics from './statistics';
import ProjectLiset from './projectList';
import { Row, Col } from 'antd';
import './style.css';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Top />
        <Statistics />
        <Row>
          <Col span={18}>
            <div className="Col-box">
              <ProjectLiset />
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
