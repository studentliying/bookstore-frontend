/**
 * Created by 励颖 on 2018/3/26.
 */
import { Button, Table, Icon, Layout, Menu, Breadcrumb} from 'antd';
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './../BookList/BookPage.css';


const { Header, Content, Footer} = Layout;


function onChange(value) {
    console.log('changed', value);
}

const columns = [{
    title: 'Picture',
    dataIndex: 'img',
    key: 'img',
    width: 180,
    render: (text) => <img src={text} />
},{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 250,
    //render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
    width: 100,
}, {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
    width: 180,
}, {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    width: 150,
}, {
    title: 'amount',
    dataindex: 'price',
    key: 'amount',
    width: 200,

}];

const data = [{
    name: "The Lord of the Rings",
    year: 1954,
    author: "J. R. R. Tolkien",
    price: 50,
    img: <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525112927986&di=7f241b9d5324759e1c2e7e21c319a8ea&imgtype=0&src=http%3A%2F%2Fimages.ali213.net%2Fpicfile%2Fpic%2F2014%2F04%2F07%2F584_201404071422021000.jpg" />,
}, {
    name: "Le Petit Prince (The Little Prince)",
    year: 1943,
    author:"Antoine de Saint-Exupéry",
    price: 30
}, {
    name: "Harry Potter and the Philosopher's Stone",
    year: 1997,
    author: "J. K. Rowling",
    price: 65
}, {
    name: "And Then There Were None",
    year: 1939,
    author: "Agatha Christie",
    price: 40
}, {
    name: "Dream of the Red Chamber",
    year: 1754,
    author: "Cao Xueqin",
    price: 65
}, {
    name: "The Hobbit",
    year: 1937,
    author: "J. R. R. Tolkien",
    price: 58
}, {
    name: "She: A History of Adventure",
    year: 1887,
    author: "H. Rider Haggard",
    price: 45
}];

class ShoppingCart extends React.Component {
    state = {
        rowSelection:{},
    }

    handleRowSelectionChange = (enable) => {
        this.setState({ rowSelection: enable ? {} : undefined });
    }

    render(){
        const state = this.state;
        return(
            <Layout>
                >
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['3']}
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
                        <Breadcrumb.Item>购物车</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Table {...this.state} columns={columns} dataSource={data} />
                            <Button size="large" type="primary" ><Link to ='./'>结算</Link></Button>
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
export default ShoppingCart

