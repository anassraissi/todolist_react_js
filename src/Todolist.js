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
                {this.state.todos.map((todo,index)=><li key={index}>{todo.text+' '} 
                <button onClick={()=>{this.finish_task(index)}} >Done</button>
                </li>)}
                <input type="text" value={this.state.new_task}  onChange={this.update_task}/>

                <button onClick={()=>{this.add_task()}} >Add a task</button>
        </div> 
    } 

}
export default Todolist; 

