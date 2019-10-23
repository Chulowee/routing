import React from 'react';
import Todo from '../todo-component/Todo';
import TodoInput from '../todo-input-component/TodoInput';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: []
        }
    }

    addTodoItem = value => {
        if (value) {
            this.setState({
                todoList: [...this.state.todoList,
                    <Todo title={value} checked={false}/>]
            });
        }
    };

    render() {
        return (
            <div>
                <div className='todos'>
                    <h1>TODO LIST</h1>
                    <TodoInput addTodoItem={this.addTodoItem} />
                    <div>{this.state.todoList}</div>
                </div>
            </div>
        )
    }
}

export default TodoList;