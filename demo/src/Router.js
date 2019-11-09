import React from 'react';
import {BrowserRouter as Router , Route, Redirect, Switch, Link} from 'react-router-dom';
import store from './store/index'
import Index from './Page/index'
import Login from './Page/login';
import Leave from './Page/leave';
import User from './Page/user';
import Files from './Page/file';
import Issue from './Page/issue';
import Headers from './components/Header';
import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
let user = store.getState().user
const Routerss =(<Router>
    {!user?<Redirect to="/login"/>:''}
    <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Login} />
        <Route>
            <Layout style={{ minHeight: '100vh',maxHeight: '100vh' }}>
                <Header style={{ padding: 0, }} >
                    <Route component={Headers} />
                </Header>
                <Layout>
                    <Sider>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Icon type="pie-chart" />
                                <Link to={`/index`}>首页</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="desktop" />
                                <Link to={`/leave`}>留言板</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="user" />
                                <Link to={`/user`}>用户列表</Link>
                            </Menu.Item>
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
                            <Link to={`/file`}>文件上传</Link>
                        </Menu.Item>
                        <Menu.Item key="10">
                            <Icon type="issues-close" />
                            <Link to={`/issue`}>问题</Link>
                        </Menu.Item>
                    </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{ margin: '16px',minHeight: 'auto' }}>
                            {user?
                                <Switch>
                                    <Route exact path="/index" component={Index} />
                                    <Route exact path="/leave" component={Leave} />
                                    <Route exact path="/user" component={User} />
                                    <Route exact path="/file" component={Files} />
                                    <Route exact path="/issue" component={Issue} />
                                </Switch>:''}
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>TwinkleDing ©2019 Created by Twinkle Ding</Footer>
                    </Layout>
                </Layout>
            </Layout>
        </Route>
    </Switch>
</Router>)

export default Routerss;