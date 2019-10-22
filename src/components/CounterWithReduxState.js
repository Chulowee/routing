import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {decrement, divide, increment, multiply, reset} from "./actions";

function CounterWithReduxState() {
    const counter = useSelector(state => state.counter);
    const isLogin = useSelector(state => state.isLogined);
    const dispatch = useDispatch();

    return(
        <div className="counter">
            <span>{counter}</span>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(multiply())}>*2</button>
            <button onClick={() => dispatch(divide())}>/2</button>
            <button onClick={() => dispatch(reset())}>Reset</button>

        </div>
    )
}
export default CounterWithReduxState;