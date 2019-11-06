import React from 'react';
import {BrowserRouter as Router , Route, Redirect, Link} from 'react-router-dom';
import store from './store/index'
import Index from './Page/index'
import User from './Page/user';
import Login from './Page/login';
import Leave from './Page/leave';
import Headers from './components/Header';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
let user = store.getState().user
const Routerss =(<Router>
    {!user?<Redirect to="/login"/>:''}
    <Route exact path="/" component={Index} />
    <Route exact path="/login" component={Login} />
    <Route>
        {/* <Route exact path="/index" component={Index} />
        <Route exact path="/leave" component={Leave} /> */}
         <Layout style={{ minHeight: '100vh',maxHeight: '100vh' }}>
            <Header style={{ padding: 0, }} >
                <Headers />
            </Header>
            <Layout>
                <Sider>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                        </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                            <Icon type="user" />
                            <span>User</span>
                            </span>
                        }
                    >
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                            <Icon type="team" />
                            <span>Team</span>
                            </span>
                        }
                    >
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                        <Icon type="file" />
                        <span>File</span>
                    </Menu.Item>
                </Menu>
                </Sider>
                <Layout>
                    <Content style={{ margin: '16px',minHeight: 'auto' }}>
                        {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb> */}
                            <Route exact path="/index" component={Index} />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </Layout>
    </Route>
</Router>)

export default Routerss;