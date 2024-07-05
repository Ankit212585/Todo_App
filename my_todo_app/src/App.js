// src/App.js
import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./index.css";

const App = () => (
  <Provider store={store}>
    <div className="App">
      <h1>To-Do List</h1>
      <TaskInput />
      <TaskList />
    </div>
  </Provider>
);

export default App;
