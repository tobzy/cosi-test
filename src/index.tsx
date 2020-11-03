import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import {
    BrowserRouter as Router
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import appReducer from './redux/index';

export const store = createStore(
    appReducer,
    {}
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
