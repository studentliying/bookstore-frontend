/**
 * Created by 励颖 on 2018/3/26.
 */
import { Table, Button } from 'antd';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Pagination } from 'antd';
import './BookPage.css';
import { Layout, Menu, Breadcrumb, Icon} from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
var totalPrice = 0;

const data = [{
    name: "The Lord of the Rings",
    year: 1954,
    author: "J. R. R. Tolkien",
    language: "English",
    price:50
}, {
    name: "Le Petit Prince (The Little Prince)",
    year: 1943,
    author:"Antoine de Saint-Exupéry",
    language: "French",
    price:30
}, {
    name: "Harry Potter and the Philosopher's Stone",
    year: 1997,
    author: "J. K. Rowling",
    language: "English",
    price: 65
}, {
    name: "And Then There Were None",
    year: 1939,
    author: "Agatha Christie",
    language: "English",
    price: 40
}, {
    name: "Dream of the Red Chamber",
    year: 1754,
    author: "Cao Xueqin",
    language: "Chinese",
    price:65
}, {
    name: "The Hobbit",
    year: 1937,
    author: "J. R. R. Tolkien",
    language: "English",
    price: 58
}, {
    name: "She: A History of Adventure",
    year: 1887,
    author: "H. Rider Haggard",
    language: "English",
    price: 45
}];



function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
}



class BookPage extends React.Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
    };
    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    }
    clearFilters = () => {
        this.setState({ filteredInfo: null });
    }
    clearAll = () => {
        this.setState({
            filteredInfo: null,
            sortedInfo: null,
        });
    }
    setNameSort = () => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'name',
            },
        });
    }
    setYearSort = () => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'year',
            },
        });
    }
    setAuthorSort = () => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'author',
            },
        });
    }
    setLanguageSort = () => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'language',
            },
        });
    }
    setPriceSort = () => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'price',
            },
        });
    }


    render() {
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.substr(0,1).charCodeAt(0) - b.name.substr(0,1).charCodeAt(0),
            sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        }, {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
            sorter: (a, b) => a.year - b.year,
            sortOrder: sortedInfo.columnKey === 'year' && sortedInfo.order,
        },{
            title: 'Author',
            dataIndex: 'author',
            key: 'author',
            sorter: (a, b) => a.author.substr(0,1).charCodeAt(0) - b.author.substr(0,1).charCodeAt(0),
            sortOrder: sortedInfo.columnKey === 'year' && sortedInfo.order,
        }, {
            title: 'Language',
            dataIndex: 'language',
            key: 'language',
            filters: [
                { text: 'English', value: 'English' },
                { text: 'French', value: 'French' },
                { text: 'Chinese', value: 'Chinese' },
            ],
            filteredValue: filteredInfo.language || null,
            onFilter: (value, record) => record.language.includes(value),
            sorter: (a, b) => a.language.substr(0,1).charCodeAt(0) - b.language.substr(0,1).charCodeAt(0),
            sortOrder: sortedInfo.columnKey === 'language' && sortedInfo.order,
        },{
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            sorter: (a, b) => a.price - b.price,
            sortOrder: sortedInfo.columnKey === 'price' && sortedInfo.order,
        }];

        let rowSelection = {

            onChange: (selectedRowKeys, selectedRows) => {
                for (var i in selectedRows) {
                    totalPrice += selectedRows[i].price;
                }
            }
    }

        return (
        <Layout>
            >
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
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
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>书城</Breadcrumb.Item>

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
                        <div>
                            <div className="table-operations">
                                <Button type="primary" onClick={this.setNameSort}>Sort name</Button>
                                <Button type="primary" onClick={this.setYearSort}>Sort year</Button>
                                <Button type="primary" onClick={this.setAuthorSort}>Sort author</Button>
                                <Button type="primary" onClick={this.setLanguageSort}>Sort language</Button>
                                <Button type="primary" onClick={this.setPriceSort}>Sort price</Button>
                                <Button type="primary" onClick={this.clearFilters}>Clear filters</Button>
                                <Button type="primary" onClick={this.clearAll}>Clear filters and sorters</Button>
                            </div>
                            <Table rowSelection={rowSelection} columns={columns} dataSource={data} onChange={this.handleChange} />
                            <Pagination showQuickJumper defaultCurrent={2} style={{marginLeft:'500px'}} total={500} onChange={onChange} />

                            <div>{totalPrice+1}</div>

                            <Button><Link to = './'>添加到购物车</Link></Button>
                            <Button><Link to = './'>返回首页</Link></Button>
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


export default BookPage;
