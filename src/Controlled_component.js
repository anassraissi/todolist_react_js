import React,{Component} from 'react';
class Controlled_component extends Component{
    // controlled component controle inputs inside component
        state={
                value:'Default',
                selectvalue:'3',
                checked:true,
                radio_value:1
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
        change_checkbox=(event)=>{
            console.log(event.target.checked);
            this.setState({
                
                checked:event.target.checked  
            })
        }
        change_value=(event)=>{
                this.setState({
                    radio_value:event.target.value
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
                 <hr/><hr/>
                 <h3>select tips</h3>
                 <label>checkbox</label>
                 <input type="checkbox" checked={this.state.checked} onChange={this.change_checkbox}/>
                 <hr/><hr/>
                 <h3>radion button tips</h3>
                 <input type='radio' value='1' checked={this.state.radio_value==1} onChange={this.change_value}/> one
                 <input type='radio' value='2' checked={this.state.radio_value==2} onChange={this.change_value} /> two

            </div>
        )
    }
}
export default Controlled_component;