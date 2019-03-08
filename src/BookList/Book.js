import React, { Component } from 'react';

class Book extends Component{
    constructor(props){
        super(props)
        this.state = {
            bookName:this.props.bookName,
            imgSrc:this.props.imgSrc,
            href:this.props.href,
            price:this.props.price,
        }
    }

   /* cutBookname = (bookname) => {
        if (bookname.length>35){
            let cutname = bookname.substring(0,35) + '...'
            return cutname
        }
        return bookname
    }*/

    render(){
        let price = this.state.price;
        let href = this.state.href;
        let imgSrc = this.state.imgSrc;
        let bookName = this.state.bookName;
        return(
            <div className="item float-left border-solid" style={{height:300,width:200,margin:5}}>
                <div className="bookimg-padding float-left">
                    <a href={href}><img style={{width:180,height:180}} src={imgSrc} alt={bookName}/></a>
                </div>
                <div className="description float-left">
                    <div>
                        <span className="symbol">￥</span><span className="price">{price}</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default Book;
