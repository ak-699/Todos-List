import React from 'react'

const TodoItem = (props) => {
  return (
    <div>
      <h4 >{props.todoItem.title}</h4>
      <p>{props.todoItem.desc}</p>
      <button type="button" className="btn btn-danger btn-sm" onClick={()=>{props.onDelete(props.todoItem)}}>Delete</button>
    </div>
  )
}

export default TodoItem
