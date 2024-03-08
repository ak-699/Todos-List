import React from 'react'
import TodoItem from './TodoItem.js'

const Todos = (props) => {
  let mystyle = {
    minHeight:"100vh",
  }
  return (
    <div className='container' style={mystyle}>
      <h2 className='text-center my-3'>Todos List</h2>
      {
         props.todos.length !=0 ?
        props.todos.map((todoItem)=>{
          return (
          <>
          <TodoItem todoItem={todoItem} onDelete = {props.onDelete}/><hr/>
          </>)
        }
        ): <p>No tasks pending</p>
      }
    </div>
  )
}

export default Todos
