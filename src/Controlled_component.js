import React,{Component} from 'react';
class Controlled_component extends Component{
    // controlled component controle inputs inside component
        state={
                value:'Default',
                selectvalue:'3'
        }
        setvalue=(event)=>{
                this.setState({
                    value:event.target.value   //mnin tbadal input 3tiha l value dyalha
                });

        }
        change_select_value=(event)=>{
            this.setState({
                selectvalue:event.target.value
            })
        }

    render(){
        return(
            <div>
            <input value={this.state.value} onChange={this.setvalue}></input> 
            <hr/><hr/>
            <h3>textarea tips on react</h3>
                <textarea value={this.state.value} onChange={this.setvalue}/>        //declaration
                <hr/><hr/>
                 <h3>select tips</h3>
                 <select value={this.state.selectvalue} onChange={this.change_select_value}> 
                    <option value={1}>one</option>
                    <option value={2}>two</option>
                    <option value={3}>tree</option>
                 </select>
            </div>
        )
    }
}
export default Controlled_component;