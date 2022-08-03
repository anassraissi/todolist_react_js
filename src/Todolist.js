import React,{Component} from "react";
import Task from "./components/Task";
import Create_task from "./components/Create_task";  
// declaration function or component function name(){ return(<div>   do what you want  </div>)}

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
update_task=(event)=>{
        console.log(event.target.value);
        this.setState({   // ajouter autre state pour save input value
          new_task:event.target.value,
        });
}
add_task=()=>{
  const todos=[...this.state.todos]; //recuperer data
  todos.push({ 
          text:this.state.new_task   // affecter input value,
    });
    this.setState({
      todos,
      new_task:''
      
    });
}
  render(){
          //componant as class external file
        
        return <div>
                {this.state.todos.map((todo,index)=><Task todo={todo} index={index} finish_task={()=>this.finish_task(index)} key={index}></Task>)}
                <Create_task value={this.state.new_task} onChange={this.update_task} add_task={this.add_task}></Create_task>
                
        </div> 
    } 

}
export default Todolist; 

