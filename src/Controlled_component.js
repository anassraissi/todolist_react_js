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
            const name=event.target.name;  //jbad name dyal inputs 
            const type=event.target.type;
            if(type=='checkbox'){
                this.setState({
                    [name]:event.target.checked    //obligatoit [] mnin use input nafs name              
                });
            }
            else{
                this.setState({
                    [name]:event.target.value           
                });
            }
               
        }


    render(){
        return(
            <div>
            <input name='value' value={this.state.value} onChange={this.setvalue}></input> 
            <hr/><hr/>
            <h3>textarea tips on react</h3>
                <textarea name='value' value={this.state.value} onChange={this.setvalue}/>  //declaration
                <hr/><hr/>
                 <h3>select tips</h3>
                 <select name='selectvalue' value={this.state.selectvalue} onChange={this.setvalue}> 
                    <option value={1}>one</option>
                    <option value={2}>two</option>
                    <option value={3}>tree</option>
                 </select>
                 <hr/><hr/>
                 <h3>select tips</h3>
                 <label>checkbox</label>
                 <input name='checked' type="checkbox" checked={this.state.checked} onChange={this.setvalue}/>
                 <hr/><hr/>
                 <h3>radion button tips</h3>
                 <div onChange={this.setvalue}>
                 <input name='radio_value' type='radio' value='1' checked={this.state.radio_value==1} /> one
                 <input name='radio_value' type='radio' value='2' checked={this.state.radio_value==2} /> two
                 </div>
    

            </div>
        )
    }
}
export default Controlled_component;