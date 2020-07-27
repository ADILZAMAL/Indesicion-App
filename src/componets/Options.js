import React from 'react'
import Option from './Option';

export default class Options extends React.Component {
    constructor(props){
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            error: undefined
        }
    }
    submitHandler(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        e.target.elements.option.value="";
        const error = this.props.addOption(option);
        this.setState(()=>({error}))   
    }
    render(){
        return(
            <div>
                <div className="widget-header">
                    <h3 className="widget-header__title">Your Options</h3>
                    <button onClick={this.props.removeAll}>Remove All</button>
                </div>
                {this.props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
                {this.props.options.map((option,idx)=><Option key={option} deleteItem ={this.props.deleteItem} optionText={option} count={idx+1}/>)}
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.submitHandler}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}
