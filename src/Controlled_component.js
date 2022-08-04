import React,{Component} from 'react';
class Controlled_component extends Component{
    // controlled component controle inputs inside component
        state={
                value:'Default'
        }
        setvalue=(event)=>{
                this.setState({
                    value:event.target.value   //mnin tbadal input 3tiha l value dyalha
                });

        }

    render(){
        return(
            <div>
            <input value={this.state.value} onChange={this.setvalue}></input> 
            <hr/><hr/>
            <h3>textarea tips on react</h3>
                <textarea value={this.state.value} onChange={this.setvalue}/>        //declaration
            </div>
        )
    }
}
export default Controlled_component;