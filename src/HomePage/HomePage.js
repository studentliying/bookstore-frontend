/**
 * Created by 励颖 on 2018/3/26.
 */
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './../BookList/BookPage.css';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class HomePage extends React.Component {
    render(){
        return(
            <Layout>
                >
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '60px' }}
                    >
                        <Menu.Item key="1"><Link to="./"><span><Icon type="home"/></span>首页</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="books"><span><Icon type="shop"/></span>书城</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="cart"><span><Icon type="shopping-cart"/></span>购物车</Link></Menu.Item>
                        <Menu.Item key="4"><Link to = "logon"><span><Icon type="user"/></span>登录</Link></Menu.Item>
                        <Menu.Item key="5"><span><Icon type="phone"/></span>联系我们</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>主页</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >
                                <SubMenu key="sub1" title={<span><Icon type="bars" />类型</span>}>
                                    <Menu.Item key="1">经典著作</Menu.Item>
                                    <Menu.Item key="2">自然科学</Menu.Item>
                                    <Menu.Item key="3">政治社会</Menu.Item>
                                    <Menu.Item key="4">当代文学</Menu.Item>
                                    <Menu.Item key="5">中外诗歌</Menu.Item>
                                    <Menu.Item key="6">少儿读物</Menu.Item>
                                    <Menu.Item key="7">其他</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="user" />作者</span>}>
                                    <Menu.Item key="8">中国大陆</Menu.Item>
                                    <Menu.Item key="9">港澳台地区</Menu.Item>
                                    <Menu.Item key="10">亚洲国家</Menu.Item>
                                    <Menu.Item key="11">美国</Menu.Item>
                                    <Menu.Item key="12">法国</Menu.Item>
                                    <Menu.Item key="13">英国</Menu.Item>
                                    <Menu.Item key="14">其他国家</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="red-envelope" />价格</span>}>
                                    <Menu.Item key="9">0-50</Menu.Item>
                                    <Menu.Item key="10">50-100</Menu.Item>
                                    <Menu.Item key="11">100-200</Menu.Item>
                                    <Menu.Item key="12">>200</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub4" title={<span><Icon type="calendar" />出版年份</span>}>
                                    <Menu.Item key="13">1980年及以前</Menu.Item>
                                    <Menu.Item key="14">1981-2000</Menu.Item>
                                    <Menu.Item key="15">2001-2010</Menu.Item>
                                    <Menu.Item key="16">>2011至今</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>

                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Online Bookstore by Li Ying
                </Footer>
            </Layout>
        );
    }

}


export default HomePage;