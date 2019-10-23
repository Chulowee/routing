// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import {createStore} from "redux";
// import rootReducer from "./components/counter/reducers"
// import {Provider} from "react-redux";
// //Store
// let store = createStore(
//     rootReducer,
// // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
// ReactDOM.render(
//     {/*<Provider store={store}>*/}
//         <App />
//     {/*</Provider>,*/}
//     document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

ReactDOM.render(
    <App />,
    document.getElementById('root')
);