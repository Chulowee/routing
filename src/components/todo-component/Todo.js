import React from 'react';
import './Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        }
    }

    onChangeState = () => {
        this.setState({checked: !this.state.checked});
    };

    render() {
        return (
            <div>
                <input type='checkbox' checked={this.state.checked} onChange={this.onChangeState}/>
                <span className='completed-task'>{this.props.title}</span>
            </div>
        )
    }
}

export default Todo;