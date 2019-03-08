/**
 * Created by 励颖 on 2018/4/3.
 */
/**
 * Created by 励颖 on 2018/4/3.
 */

import React, { Component } from 'react';
import './../BookList/BookPage.css'
import { Layout, Menu, Breadcrumb, Form, Input, message, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import {Link } from "react-router-dom";

const { Header, Content, Footer,} = Layout;
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];




class RegistrationForm extends React.Component {
    constructor(props){
        super(props);
        this.handleLogon = props.handleLogon;
        this.state={
            username:'',
            password:'',
            passwordConfirm:'',
            emailAddress:'',
            address:'',
            phoneNum:'',
            error:false,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }
    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    }
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    };

    handleKeyDown = (e) => {
        if (e.keyCode === 16){
            this.handleSubmit(e)
        }
    };

    handleLogin = (e) => {
        e.preventDefault();
        let username = this.state.username;
        let password = this.state.password;
        let passwordConfirm = this.state.passwordConfirm;
        let email = this.state.emailAddress;
        let addr = this.state.address;
        let phone = this.state.phoneNum;


        if (username.length === 0) {
            alert("用户名不能为空");
        }
        else if (password.length === 0) {
            alert("密码不能为空");
        }
        else if (passwordConfirm.length === 0) {
            alert("密码不能为空");
        }
        else if (email.length === 0) {
            alert("邮箱不能为空");
        }
        else if (addr.length === 0) {
            alert("地址不能为空");
        }
        else if (phone.length === 0) {
            alert("联系电话不能为空");
        }
        else if (password != passwordConfirm)
            alert("两次输入密码错误");

        else {
            fetch('http://localhost:8080/login?' + 'name=' + username + '&pwd=' + password + '&email=' + email + '&addr=' + addr + '&phone=' + phone,
                {
                    method: 'POST',
                    mode: 'cors',

                })
                .then(function (response) {
                    console.log('Request successful', response);
                    return response.text();
                })
                .then(function (result) {
                    alert(result);
                    console.log("result: ", result);

                })
        }
    };




    render(){
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );



        return(
        <Layout>
            >
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['4']}
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
                    <Breadcrumb.Item>注册</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>

                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <h1></h1>
                        <Input name="username" size="large" style={{width: '50%', marginLeft: '350px'}}
                               placeholder="用户名" onChange={this.handleChange}/>
                        <h1></h1>
                        <Input name="password" size="large" style={{width: '50%', marginLeft: '350px'}} placeholder="密码"
                               onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
                        <h1></h1>
                        <Input name="passwordConfirm" size="large" style={{width: '50%', marginLeft: '350px'}} placeholder="确认密码"
                               onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
                        <h1></h1>
                        <Input name="emailAddress" size="large" style={{width: '50%', marginLeft: '350px'}} placeholder="邮箱"
                               onChange={this.handleChange} />
                        <h1></h1>
                        <Input name="address" size="large" style={{width: '50%', marginLeft: '350px'}} placeholder="住址"
                               onChange={this.handleChange} />
                        <h1></h1>
                        <Input name="phoneNum" size="large" style={{width: '50%', marginLeft: '350px'}} placeholder="联系电话"
                               onChange={this.handleChange} />
                            <FormItem
                                {...formItemLayout}
                                label="验证码"
                                extra="We must make sure that your are a human."
                            >
                                <Row gutter={8}>
                                    <Col span={12}>
                                        {getFieldDecorator('captcha', {
                                            rules: [{ required: true, message: 'Please input the captcha you got!' }],
                                        })(
                                            <Input />
                                        )}
                                    </Col>
                                    <Col span={12}>
                                        <Button>获取验证码</Button>
                                    </Col>
                                </Row>
                            </FormItem>
                            <FormItem {...tailFormItemLayout}>
                                {getFieldDecorator('agreement', {
                                    valuePropName: 'checked',
                                })(
                                    <Checkbox>我已同意签订 <a href="">此协议</a></Checkbox>
                                )}
                            </FormItem>
                            <FormItem {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit" onClick = {this.handleLogin}>注册</Button>
                            </FormItem>

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
const Login = Form.create()(RegistrationForm);
export default Login;