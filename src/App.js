import './App.css';
import Header from './MyComponents/Header.js'
import Todos from './MyComponents/Todos.js'
import TodoItem from './MyComponents/TodoItem.js'
import Footer from './MyComponents/Footer.js'
import { useState, useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo.js'

function App() {
  let initTodo;
  if (localStorage.getItem("todos")) {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  else {
    initTodo = [];
  }
  const onDelete = (todoItem) => {
    console.log("i am on delete", todoItem);
    /* deleting this way does not work in react
    let index = todos.indexOf(todoItem);
    todos.splice(index,1); */
    setTodos(todos.filter((e) => {
      return e != todoItem;
    }))

  }

  const addTodo = (title, desc) => {
    console.log("i am adding a todo", title, desc);
    const newTodo = {
      sno: todos.length + 1,
      title: title,
      desc: desc,
    }
    setTodos([...todos, newTodo]);
    console.log(newTodo);

  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
