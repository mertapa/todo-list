import Header from "./components/Header";
import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import TodoList from "./components/TodoList";


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Header />
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
       <div> 

       </div>
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
