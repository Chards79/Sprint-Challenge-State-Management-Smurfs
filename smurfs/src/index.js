import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";


import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
    return (
        <div className="App">
            <h1>SMURFS! 2.0 W/ Redux</h1>
            <div>Welcome to your state management version of Smurfs!</div>
            <div>Start inside of your `src/index.js` file!</div>
            <div>Have fun!</div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
