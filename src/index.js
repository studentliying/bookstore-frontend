import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import HomePage from './HomePage/HomePage';
//import BookPage from './BookList/BookPage';
//import Logon from './Log/Logon';
//import Login from './Log/Login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<HomePage />, document.getElementById('home'));
//ReactDOM.render(<BookPage />, document.getElementById('list'));
//ReactDOM.render(<Logon />, document.getElementById('logon'));
//ReactDOM.render(<Login />, document.getElementById('login'));
registerServiceWorker();
