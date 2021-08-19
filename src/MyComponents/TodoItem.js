import React from 'react'

export const TodoItem = ({todo,OnDelete}) => {
    return (
        <>
            <div className="py-3">
                <h1 >{todo.srn}</h1>
                <p>{todo.desc}</p>
                <p>{todo.work}</p>
                <button className="btn btn-sm btn-danger" onClick={()=>{OnDelete(todo)}}>Delete</button>
            </div>
            <hr/>
        </>
    )
}
