import React from 'react';
import Button from '../button.component/button.component';


export default class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
        }

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement() {
        this.setState({ value: this.state.value + 1 });
    }

    handleDecrement() {
        this.setState({ value:  this.state.value - 1 });
    }

    render() {
        return (
            <div>
                <div>
                    Counter: {this.state.value}
                </div>
                <Button color="green" text="Increment" handleButtonClick={this.handleIncrement}/>
                <Button color="red" text="Decrement" handleButtonClick={this.handleDecrement}/>
            </div>
        );
    }
}