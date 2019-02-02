import React,{Component} from 'react';

import Tr from "./Tr";

class Table extends Component{

    constructor(props){
        super(props);
        this.state ={data:[

            [" ","Knocky","Flor","Ella","Juan"],
            ["Breed","Jack Russel","Poodle","Streetdog","Cocker"],
            ["Age",16,9,10,5],
            ["Owner","Mother-in-law","Me","Me","Sister-in-law"],
            ["Eating Habits","Eats everyone's leftovers","Nibbles at food", " Hearty eater","Will eat till he explodes"]

        ]}
    }

    render(){

        return(
            <table border = "1">

                <Tr data={this.state.data[0]}/>
                <Tr data={this.state.data[1]}/>
                <Tr data={this.state.data[2]}/>
                <Tr data={this.state.data[3]}/>
            
            </table>

        )



    }

}

export default Table;