import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from 'redux'
import todoApp from './store/reducer'
let store = createStore(todoApp)
const render = ()=>{
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById("root")
      );
    
}
render()

store.subscribe(render);


