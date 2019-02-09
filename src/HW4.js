import React,{Component} from 'react';
import axios from "axios";



  class List extends Component{
    imageStyle = {width: 100, height: 100};
    constructor(props){

        super(props);
    
    }
    detailHandler = name=>{
        axios({method: 'get', url: `https://api.github.com/users/${name}`})
        .then(response => {
          //console.log(response);
          //this.setState({data: response.data});
          this.props.transferMsg(response.data);
          //console.log(response.data);
        })
        .catch(err => {
          console.log(err);
          alert(err);
        });
    }
    
    render(){
    return (
      <tr onClick = {()=>this.detailHandler(this.props.login)}>
        <td>{this.props.id}</td>
        <td>{this.props.login}</td>
        <td>
          <img style={this.imageStyle} src={this.props.avatar_url} alt={this.props.avatar_url} />
        </td>
      </tr>
    );

    }
  }

  function Detail(props)
  {

    const boxStyle ={width :300,height:600,position:'fixed',zIndex:999,top:0};

    console.log(props.data);

    const {followers,following,login,location} = props.data;
      return(
        <div>
             Detail:
            <input type="text" style = {boxStyle} value ={` followers : ${followers},\nfollowing : ${following},\nlocation : ${location},\nname : ${login}   `}></input>
        </div>
      )
  }
  
  class HW4 extends Component {
    constructor(props) {
      super(props);
      // remember that you have to initialize
      // the same data type for the result you want to get in state
      this.state = {data: [],showdata:{}}; 
    }


    componentDidMount() {
      // componentDidMount is the right place to get some data to render the page
      axios({method: 'get', url: 'https://api.github.com/users'})
        .then(response => {
          console.log(response);
          this.setState({data: response.data});
        })
        .catch(err => {
          console.log(err);
          alert(err);
        });
    }

    transferMsg = showdata =>{
        
        this.setState({showdata:showdata});

        console.log(this.state.showdata);
    }
    render() {
      return (
          <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>username</th>
              <th>image</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item, index) => {
              return <List key={item.id} {...item} transferMsg = {showdata =>{this.transferMsg(showdata)} }/>;
            })}
          </tbody>
        </table>
           <Detail data= {this.state.showdata}/>
        </div>
      );
    }
  }

  export default HW4;