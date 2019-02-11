import React,{Component} from 'react';

import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';


class HW7 extends Component{
    constructor(props){
        super(props);
        this.openHandler = this.openHandler.bind(this);
        this.closeHandler = this.closeHandler.bind(this);
        this.state = {open:false};
    }

    openHandler = () =>{
        this.setState({open:true});
    }

    closeHandler = () =>{
        this.setState({open:false});
    }

    render(){

        return (
            <>
            
            
            <Button variant ="primary" onClick={this.openHandler}>
            {this.props.buttonText}
            </Button>

            <Modal show={this.state.open} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.content}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeHandler}>
            {this.props.cancelButtonText}
            </Button>
            <Button variant="primary" onClick={this.closeHandler}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
            
            </>

 
        )


    }
}

export default HW7;