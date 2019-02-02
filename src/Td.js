import React,{Component} from 'react';

class Td extends Component{

    render(){

        return <td borderStyle = "solid">{this.props.text}</td>;
        
    }
}

export default Td;