import React from 'react';
import './App.css';
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import CounterGroup from "./components/counter-group-component/CounterGroup";
import TodoList from "./components/todo-list-component/TodoList";
import Counter from "./components/counter-component/Counter";

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Link to="/"><h1>Counter Group</h1></Link>
                    <hr/>
                    <Link to="/task"><h1>Task List</h1></Link>
                    <hr/>
                    <Link to="/counter"><h1>Counter</h1></Link>
                    <hr/>
                    <div class="container">
                    <Switch>
                        <Route exact path="/">
                            <CounterGroup defaultCount="3"/>
                        </Route>
                        <Route path="/task">
                            <TodoList/>
                        </Route>
                        <Route path="/counter">
                            <Counter/>
                        </Route>
                    </Switch>
                </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
