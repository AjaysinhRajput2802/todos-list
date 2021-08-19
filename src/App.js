//import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import React, { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos"))
    initTodo = JSON.parse(localStorage.getItem("todos"));
  else
    initTodo = [
      {
        srn:1,
        desc:"Go to place 1",
        work:"Buy from place 1"
      },
      {
        srn:2,
        desc:"Go to place 2",
        work:"Buy from place 2"
      },
      {
        srn:3,
        desc:"Go to place 3",
        work:"Buy from place 3"
      }
    ];
  const OnDelete = (todo)=>{
    console.log("I deleting this todo ",todo);
    // Deleting this way in react does not work
    //let id=todos.indexOf(todo);
    //todos.splice(id,1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo = (desc,work)=>{
    console.log("I am adding this todo",desc,work);
    // select maximum srn from todos
    let srn;
    if(todos.length===0)
      srn=0;
    else
      srn = Math.max.apply(Math, todos.map(function(o) { return o.srn; }));
    //console.log(srn);
    const myTodo={
      srn: srn+1,
      desc: desc,
      work: work
    };
    console.log(myTodo);
    setTodos([...todos,myTodo]); 
  }
  // Declare a new state variable, which we'll call "count"
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="MyTodosList"/>
        <Switch>
          <Route exact path="/">
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} OnDelete={OnDelete}/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

/*
<div classNameName="App">
      <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
