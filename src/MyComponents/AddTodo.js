import React from 'react'
import {useState} from 'react';

const AddTodo = (props) => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const submit = (e)=> {
        e.preventDefault()
        if (!title || !desc )
        {
            alert("title or desc cannot be empty");
        }
        else
        {
            props.addTodo(title,desc);
        }
    }
    return (
        <div className='container'>
            <h3 className='text-center'>Write a todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Todo</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" className="form-control" value = {desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc" />
                </div>
                <button type="submit" className="btn btn-primary btn-success">Submit</button>
            </form>
        </div>
    )
}

export default AddTodo
