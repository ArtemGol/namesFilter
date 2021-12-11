import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyles} from "./GlobalStyles";
import {Provider} from "react-redux";
import {store} from "./core/redux/store";

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyles/>
        <App/>
    </Provider>,
    document.getElementById("root")
);

reportWebVitals();