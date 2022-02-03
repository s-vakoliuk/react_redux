import React from "react";
import {useSelector} from "react-redux";

import Form from "./components/Form";
import TodoItem from "./components/TodoItem";

import './App.css';


function App() {
    const todos=useSelector((state)=>state.todo.todos)

  return (
    <div className="App">
      <header className="App-header">
        <Form />
          {todos?.map((todo)=>(<TodoItem key={todo.id} todo={todo}/>))}
      </header>
    </div>
  );
}

export default App;
