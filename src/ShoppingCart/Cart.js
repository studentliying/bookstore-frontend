/**
 * Created by 励颖 on 2018/3/26.
 */
import { Button, Table, Icon,  Form,  Layout, Menu, Breadcrumb,Popconfirm} from 'antd';
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './../BookList/BookPage.css';
import CartRow from './CartRow';

const { Header, Content, Footer,  } = Layout;

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
        title: '书名',
        dataIndex: 'bookname',
        width: '30%',
    },{
        title: '数量',
        dataIndex: 'amount',
        render: (text, record) => (
            <CartRow
                value={text}
                onChange={this.onCellChange(record.key, 'amount')}
            />),
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
        dataSource: [],
    };

    fetch('http://localhost:8080/Cart/showcart',
    {
      method: 'GET',
      mode: 'cors',
      credentials:'include',
    })
      .then(response => {
        console.log('Request successful', response);
        return response.json()
            .then(result => {
              console.log(result.length);
              this.setState({
                dataSource: result
              })
            })
      })
  }

    handleRowSelectionChange = (enable) => {
        this.setState({ rowSelection: enable ? {} : undefined });
    };

    onCellChange = (key, dataIndex) => {
        return (value) => {
            const dataSource = [...this.state.dataSource];
            const target = dataSource.find(item => item.key === key);
            if (target) {
                target[dataIndex] = value;
                this.setState({ dataSource });
            }
        };
    };

    onDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    };

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
