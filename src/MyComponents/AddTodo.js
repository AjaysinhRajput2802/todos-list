import React from 'react'
import { useState } from 'react';

export const AddTodo = (props) => {
    const [desc, setDesc] = useState("");
    const [work, setWork] = useState("");
    const submit = (e)=>{
        e.preventDefault(); // stop page reloading
        if(!desc || !work)
            alert("Description or Work cannot be Blank");
        else{
            props.addTodo(desc,work);
            setDesc("");
            setWork("");
        }
    }

    return (
        <div className="container my-3 py-4">
            <h3 className="my-4">Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                    <div className="mb-3">
                        <label htmlFor="work" className="form-label">Work</label>
                        <input type="text" value={work} onChange={(e)=>setWork(e.target.value)} className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-s btn-success">Add into List</button>
            </form>
        </div>
                    )
}
