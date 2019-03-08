import React,{Component} from 'react';
import './index.css';
import HomePage from './HomePage/HomePage';
import BookPage from './BookList/BookPage';
import Logon from './Log/Logon';
import Login from './Log/Login';
import Cart from './ShoppingCart/Cart';
import { HashRouter as Router, Route } from "react-router-dom";
import {Switch} from "react-router";

import './App.css';


class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/logon" component={Logon}/>
                        <Route exact path="/books" component={BookPage}/>
                        <Route exact path="/cart" component={Cart}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default App;



