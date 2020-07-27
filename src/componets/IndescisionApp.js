import React from 'react'
import  AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal'
export default class IndescisionApp extends React.Component{
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
        this.handelPick = this.handelPick.bind(this);
        this.addOption = this.addOption.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.deletePick = this.deletePick.bind(this)
        this.state={
            options : [],
            selectedOption: undefined
        }
    }
    componentDidMount(){
        try{
            const jsonData = (localStorage.getItem('options'));
            const options = JSON.parse(jsonData)
             if(options)
                this.setState(()=>({options}))
        }catch(e){
            console.log('erro')
        }
        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const jsonData = JSON.stringify(this.state.options);
            localStorage.setItem('options', jsonData);
        }
    }
    componentDidUnmount(){
        console.log('component unmounted')
    }
    addOption(option){
        if(this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        }
        else if(!option){
            return 'Please enter value'
        }
        this.setState((prevState)=>{
            return{
                options:[...prevState.options,option],
            }
        })
    }
    deletePick(){
        this.setState(()=>({selectedOption:undefined}))
    }
    handelPick(){
        const len = this.state.options.length;
        const randomNum=Math.floor(Math.random() * len);
        const option=this.state.options[randomNum];
        this.setState(()=>({selectedOption:option}))
    }

    removeAll(){
        this.setState(()=>({options:[]}))
    }
    deleteItem(deleteOption) {
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=>option!==deleteOption)
        }))
    }

    render(){
        const title = "Indescison App";
        const subTitle = "Put your life on the hand of";
        return (
            <div>
                <Header subtitle={subTitle}/>
                <div className="container">
                <Action
                 hasProperty={this.state.options.length > 0}
                 handelPick={this.handelPick} 
                 />
                 <div className="widget">
                 <Options 
                 options={this.state.options}
                 removeAll={this.removeAll}
                 addOption={this.addOption}
                 deleteItem = {this.deleteItem}
                 />
                 <AddOption />
                 </div>
               
                </div>
                
                <OptionModal selectedOption={this.state.selectedOption} deletePick={this.deletePick}/>
            </div>
        );
    }
}

IndescisionApp.defaultProps = {
    options:[]
}
