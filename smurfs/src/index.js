import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import GetSmurf from "./components/GetSmurf";
import SmurfForm from "./components/SmurfForm";
import "./index.css";


const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
    return (
        <div className="App">
            <h1>My Smurf Village</h1>
            <div>
                <GetSmurf />
                <SmurfForm />
            </div>
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
