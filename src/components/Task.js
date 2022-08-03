import React,{Component} from "react";

function Task(prpos){
    const todo=prpos.todo;
    const index=prpos.index;
    const finish_task=prpos.finish_task;
    return (
    <li key={index}>{todo.text+' '} 
    <button onClick={()=>{finish_task(index)}} >Done</button>
    </li> );
    }
    export default Task;