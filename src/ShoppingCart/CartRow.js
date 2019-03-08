import React, { Component } from 'react';
import { Button} from 'antd';


class CartRow extends Component{

    state = {
        value: this.props.value,
        amount:this.props.amount,
    }


    addAmount = () => {
    this.setState({ amount: this.state.amount+1 });
}

    minusAmount = () => {
        this.setState({ amount: this.state.amount-1 });
    }



    render() {
        const {amount} = this.state;
    return (
            <div className="cart-row">
                {amount||''}
                <Button
                    type="plus"
                    className="add-cell-icon"
                    onClick={this.addAmount}>+</Button>
                <p>{this.state.amount}</p>
                <Button
                    type="minus"
                    className="minus-cell-icon"
                    onClick={this.minusAmount}>-</Button>
            </div>
        );
    }


}

export default CartRow;