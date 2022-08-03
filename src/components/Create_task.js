import React,{Component} from "react";

function Create_task(prpos){
    
    return(
      <div>
      <input type="text" value={prpos.value}  onChange={prpos.onChange}/>

      <button onClick={prpos.add_task}>Add a task</button>
      </div>
          
    )
          
  }
  export default Create_task;