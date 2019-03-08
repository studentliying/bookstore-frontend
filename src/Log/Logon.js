/**
 * Created by 励颖 on 2018/4/3.
 */
import { Input } from 'antd';
import React, { Component } from 'react';
import './../BookList/BookPage.css'
import { Button, Layout, Menu, Breadcrumb, Icon, message } from 'antd';
import {Link } from "react-router-dom";


const { Header, Content, Footer } = Layout;

class Logon extends React.Component {
    constructor(props){
        super(props);
        this.handleLogon = props.handleLogon;
        this.state={
            username:'',
            password:'',
            error:false,
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    };

    handleKeyDown = (e) => {
        if (e.keyCode === 16){
            this.handleSubmit(e)
        }
    };


    handleSubmit = (e) => {
        e.preventDefault();
        let username = this.state.username;
        let password = this.state.password;

        if (username === null) {
            alert("用户名不能为空");
        }
        if (password === null) {
            alert("密码不能为空");
        }

        fetch('http://localhost:8080/User/logon?'+'name='+username+'&pwd='+password,
            {
                method: 'POST',
                mode: 'cors',
                credentials:'include',
            })
            .then(function (response) {
                console.log('Request successful', response);
                if(response.status === 200){
                  alert("登录成功！");
                  window.location.href="/";
                }
                else
                    alert("登录失败！");
            })
            .then(function (result) {
                console.log("result: ", result);
            })
    };


    render()
{
    return (
        <Layout>
            >
            <Header className="header">
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['4']}
                    style={{lineHeight: '60px'}}
                >
                    <Menu.Item key="1"><Link to="./"><span><Icon type="home"/></span>首页</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="books"><span><Icon type="shop"/></span>书城</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="cart"><span><Icon type="shopping-cart"/></span>购物车</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="logon"><span><Icon type="user"/></span>登录</Link></Menu.Item>
                    <Menu.Item key="5"><span><Icon type="phone"/></span>联系我们</Menu.Item>
                </Menu>
            </Header>
            <Content style={{padding: '0 50px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>主页</Breadcrumb.Item>
                    <Breadcrumb.Item>登录</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{padding: '24px 0', background: '#fff'}}>

                    <Content style={{padding: '0 24px', minHeight: 280}}>
                        <h3>用户登录</h3>
                        <h1></h1>
                        <Input name="username" size="large" style={{width: '30%', marginLeft: '450px'}}
                               placeholder="用户名" onChange={this.handleChange}/>
                        <h1></h1>
                        <Input name="password" size="large" style={{width: '30%', marginLeft: '450px'}} placeholder="密码"
                               onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
                        <h3></h3>

                        <h2><Button size="large" type="primary" onClick={this.handleSubmit}>登录</Button>
                            &nbsp;
                            <Button size="large" type="primary"><Link to="./login">注册</Link></Button>
                        </h2>
                    </Content>
                </Layout>
            </Content>
            <Footer style={{textAlign: 'center'}}>
                Online Bookstore by Li Ying
            </Footer>
        </Layout>
        );
    }
}


export default Logon;