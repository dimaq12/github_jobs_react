import * as React from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Menu } from 'antd';
import './Header.scss';

const {
  Header
} = Layout;


export const AppHeader = () => {
    return (
        <Header>
            <Row gutter={12} type="flex" justify="space-between" align="middle">
                <Col span={3}>
                    <h2 id="logo">
                        <a href="/">GitHub Jobs</a>
                    </h2>
                </Col>
                <Col span={5}>
                    <Menu mode="horizontal" theme="dark" defaultSelectedKeys={['2']}>
                        <Menu.Item>
                            <Link to="/">All jobs</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/">Pots a job</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/">How it works</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </Header>
    )
}