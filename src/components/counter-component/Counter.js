import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    render() {
        return (
            <div class="counter">
                <button onClick={this.handleAddition}>+</button>
                <span>{this.state.number}</span>
                <button onClick={this.handleSubtraction}>-</button>
            </div>
        );
    }

    handleAddition = () => {
        this.setState({number: this.state.number + 1});
        this.props.onCounterValueChange(1);
    }

    handleSubtraction = () => {
        this.setState({number: this.state.number - 1});
        this.props.onCounterValueChange(-1);
    }
}

export default Counter;
