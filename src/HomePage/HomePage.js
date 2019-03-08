/**
 * Created by 励颖 on 2018/3/26.
 */
import { Layout, Menu, Breadcrumb, Icon, Card, Col, Row, Button  } from 'antd';
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './../BookList/BookPage.css';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogon = props.handleLogon;
    this.state = {
      kind: 'Classic',
      language: '',
      bookList:[],
      bookname:"",
      src:"",
    };
    this.fetchBooksByKind(this.state.kind);
  }

  fetchBooksByKind=(kind)=>{
    fetch('http://localhost:8080/Book/searchByKind?kind='+ kind,
    {
      method: 'GET',
      mode: 'cors',
    })
    .then(response => {
      console.log('Request successful', response);
      return response.json()
        .then(result => {
          console.log(result.length);
          console.log(result[0].src);
          this.setState({
            bookList: result,
            bookname: result[0].bookname,
            src: result[0].src
          })
        })
    })
  };

  fetchBooksByLanguage=(language)=>{
    fetch('http://localhost:8080/Book/searchByLanguage?language='+ language,
    {
      method: 'GET',
      mode: 'cors',
    })
      .then(response => {
        console.log('Request successful', response);
        return response.json()
          .then(result => {
            console.log(result.length);
            this.setState({
              bookList: result
            })
          })
      })
  };


    handleKindChange=(value)=>{
        console.log(value);
        this.fetchBooksByKind(value);
    };

    handleLanguageChange=(value)=>{
      console.log(value);
      this.fetchBooksByLanguage(value);
    };

    addToCart=(book)=>{
      console.log(book.bookname);
      //fetch-----------------------------------------------------
    };

    render(){
        return(
            <Layout>
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
                                  <Menu.Item key="1"><span onClick={()=>this.handleKindChange("Classic")}>经典著作</span></Menu.Item>
                                  <Menu.Item key="2"><span onClick={()=>this.handleKindChange("Science")}>自然科学</span></Menu.Item>
                                  <Menu.Item key="3"><span onClick={()=>this.handleKindChange("Poem")}>中外诗歌</span></Menu.Item>
                                  <Menu.Item key="4"><span onClick={()=>this.handleKindChange("Children")}>少儿读物</span></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="user" />语言</span>}>
                                  <Menu.Item key="5"><span onClick={()=>this.handleLanguageChange("Chinese")}>中文</span></Menu.Item>
                                  <Menu.Item key="6"><span onClick={()=>this.handleLanguageChange("English")}>英文</span></Menu.Item>
                                  <Menu.Item key="7"><span onClick={()=>this.handleLanguageChange("French")}>法文</span></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="red-envelope" />价格</span>}>
                                    <Menu.Item key="9">0-50</Menu.Item>
                                    <Menu.Item key="10">50-100</Menu.Item>
                                    <Menu.Item key="11">>100</Menu.Item>
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
                          <Row gutter={16}>
                            {this.state.bookList.map((book, key)=>(
                                <Col span={8}>
                                  <Card
                                      hoverable
                                      style={{ width: 240 }}
                                      cover={<img src={book.src}/>}
                                  >
                                    <Meta title={book.bookname} description={
                                      <div>
                                        <br/>
                                        <Button icon="plus" style={{marginLeft:"15%"}} onClick={()=>this.addToCart(book)}>添加到购物车</Button>
                                      </div>
                                    }/>
                                  </Card>
                                </Col>
                                )
                            )}
                          </Row>
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