import React,{Component} from 'react';
import Td from './Td';
import { model } from 'mongoose';
class Tr extends Component{

    
    constructor(props){
        super(props);
    }

    render(){
        return (
        <tr boardStyle = 'solid'>
        <Td  text = {this.props.data[0]}/>
        <Td  text = {this.props.data[1]}/>
        <Td  text = {this.props.data[2]}/>
        <Td  text = {this.props.data[3]}/>
        <Td  text = {this.props.data[4]}/>
        </tr>

        );
        
    }
}

export default Tr;