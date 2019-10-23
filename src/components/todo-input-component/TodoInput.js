import React from 'react';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    inputValueOnChange = (event) => {
        this.setState({ inputValue: event.target.value })
    };

    addTodoItem = () => {
        this.props.addTodoItem(this.state.inputValue);
    };

    render() {
        return (
            <div>
                <div>
                    <input type='text' onChange={this.inputValueOnChange} />
                    <button onClick={this.addTodoItem}>Add Todo</button>
                </div>
            </div>
        )
    }
}

export default TodoInput;