import React ,{Component} from 'react';
import { setTimeout } from 'timers';



class  HW3 extends Component{

    constructor(props){
        super(props);
    
        this.state = {number : 0,started : false};

    }

    startHandler = ()=>{
        this.setState({started:true});
        var interval =setInterval(() => {
            if(!this.state.started){
                clearInterval(interval);
                return;
                }
            this.setState({number:this.state.number+1});

        }, 1000);

    }
    
    stopHandler = ()=>{
        this.setState({started:false});
    }
    resetHandler  = ()=>{
    this.setState({number:0});
    }

    render(){

        return (

            <div>

           <h1>{this.state.number}</h1>
            <br/>

            <button onClick ={this.state.started?this.stopHandler:this.startHandler}>{this.state.started? "Stop":"Start"}</button> 

            <button onClick ={this.resetHandler}>Reset</button>   

        </div>
        )
    }

    


}

export default HW3;