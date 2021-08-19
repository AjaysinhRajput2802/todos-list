import React from 'react'
import {TodoItem} from "./TodoItem"

export const Todos = (props) => {
    return (
        <div className="container my-5">
        <h4 className="text-center my-3">Todo List</h4>
        {props.todos.length===0?"No todos to display    ": props.todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.srn} OnDelete={props.OnDelete}/>
        })}
        </div>
    )
}
