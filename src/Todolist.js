import React,{Component} from "react";
class Todolist extends Component{
    state={
        todos:[
         {text:'React js'},
         {text:'node js'},
         {text:'js'},
         {text:'Vue js'}
       ]
     };
    finish_task=(index)=>{
        
const todos=[...this.state.todos]; //recuperer data
            todos.splice(index,1);   //delete the data
            this.setState({   // update data 
                    todos
            });
}
    render(){
          //componant as class external file
        
        return <div>
                {this.state.todos.map((todo,index)=><li key={index}>{todo.text+' '} 
  <button onClick={()=>{this.finish_task(index)}} >Done</button>
</li>)}
<input type='text'></input> <button onClick={''} >Add a task</button>
        </div> 
    } 

}
export default Todolist; 

