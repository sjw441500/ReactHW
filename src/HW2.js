import React ,{Component} from 'react';

class HW2 extends Component{

    constructor(props){
        super(props);
        this.state = {number:1};
    }
    increaseHandler = () =>{
        this.setState({number: this.state.number+1});
    }
    decreaseHandler=()=>{

        this.setState({number: this.state.number-1});

    }
    
    render(){

        return(

            <div>
            
           <p fontSize = {40} > {this.state.number} </p>

            <br/>

            <button onClick = {this.increaseHandler}> increase</button>
            <button onClick = {this.decreaseHandler}>decrease</button>

            </div>
        )
    }
}

export default HW2;
