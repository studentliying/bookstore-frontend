/**
 * Created by 励颖 on 2018/3/26.
 */
import { Button, Table, Icon,  Form,  Layout, Menu, Breadcrumb,Popconfirm} from 'antd';
import React, { Component } from 'react';

import {Link} from "react-router-dom";
import './../BookList/BookPage.css';
import CartRow from './CartRow';


const { Header, Content, Footer,  } = Layout;



/*const columns = [{

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

}];*/

//const data=[];
/*const data = [
    {
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
}];*/

//data[0] = <CartRow cartId="1" bookName="The Lord of the Rings}" />;



let result=[];

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: '书名',
            dataIndex: 'name',
            width: '30%',
        },{
            title: '数量',
            dataIndex: 'amount',
            render: (text, record) => (
                <CartRow
                    value={text}
                    onChange={this.onCellChange(record.key, 'amount')}
                />
            ),
        }, {
            title: '价格',
            dataIndex: 'price',
        }, {
            title: '作者',
            dataIndex: 'author',
        }, {
            title:'删除',
            dataIndex: 'operation',
            render: (text, record) => {
                return (
                    this.state.dataSource.length > 1 ?
                        (
                            <Popconfirm title="确定删除?" onConfirm={() => this.onDelete(record.key)}>
                                <a href="javascript:"><Icon type="delete"/></a>
                            </Popconfirm>
                        ) : null
                );
            },
        }];





        this.state = {
            rowSelection:{},
            dataSource: [{
                key: '0',
                name: 'Edward King 0',
                amount: '1',
                price: '32',
                author: 'London, Park Lane no. 0',
            }, {
                key: '1',
                name: 'Edward King 1',
                amount: '1',
                price: '32',
                author: 'London, Park Lane no. 1',
            }],
            count: 2,
        };
    }
        handleRowSelectionChange = (enable) => {
            this.setState({ rowSelection: enable ? {} : undefined });
        }

    onCellChange = (key, dataIndex) => {
        return (value) => {
            const dataSource = [...this.state.dataSource];
            const target = dataSource.find(item => item.key === key);
            if (target) {
                target[dataIndex] = value;
                this.setState({ dataSource });
            }
        };
    }
    onDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    }

    handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            name: `Edward King ${count}`,
            age: 32,
            address: `London, Park Lane no. ${count}`,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
    }

    render(){
        const state = this.state;
        const columns = this.columns;

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
                            <div>
                                <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
                                <Table bordered {...this.state}  dataSource={state.dataSource} columns={columns} />
                                <Button size="large" type="primary" ><Link to ='./'>结算</Link></Button>
                            </div>



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
export default Cart

/**
 * Created by 励颖 on 2018/5/3.
 */
