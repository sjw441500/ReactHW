import React,{Component} from 'react';

function UserGreeting(props){
    return (

        <div>
            <h1>Welcome Back !</h1>
            <button onClick = {props.logoutHandler}>logout</button>
            </div>
    )
}

class  GuestGreeting extends Component{
    constructor(props){
        super(props);
        this.state = {user: '',pwd: ''};
    }

    handleInputChange = e => {
        this.setState({user: e.target.value});
        console.log('set user to: ', e.target.value);
      };
      handlePwdChange = e => {
        this.setState({pwd: e.target.value});
        console.log('set pwd to: ', e.target.value);
      };
      handleSubmit = e => {
        e.preventDefault(); 
        console.log('The values in the form are: ', this.state);
        const {user,pwd} = this.state;
        if(this.check(user,pwd))
        this.props.transferMsg(true);
        else
        alert("wrong user or password !");
      }

    check(user,pwd){
        if(user  === "today"&& pwd === "20180621")
        return true;
        if(user  === "yesterday"&& pwd === "20180620")
        return true;
        if(user  === "tomorrow"&& pwd === "20180622")
        return true;
        return false;
    }

 
    render(){
    return (
        <div>
           <h1>Please Log in !</h1>
           <form onSubmit = {this.handleSubmit}>
            <label>
            username:
           <input type ="text" 
           value={this.state.user}
           onChange={this.handleInputChange}></input>
           </label>
           <label>
           password:
           <input type ="password" 
           value={this.state.pwd}
           onChange={this.handlePwdChange}></input>     
           </label>
           <input type ="submit" value="Submit"/>
        </form> 
        </div>
    )
}
}


class HW5 extends Component{
    constructor(props){
        super(props);
        this.state = {authenticated:false};
    }
    transferMsg(authenticated) {
        this.setState({
          authenticated
        });
      }
logout = ()=>{
    this.setState({authenticated:false});
}
    render(){
        const {authenticated}= this.state;
        if(authenticated)
        return <UserGreeting  logoutHandler ={this.logout}/>
        else{
            return <GuestGreeting transferMsg ={authenticated => this.transferMsg(authenticated)} />
        }
    }
}

export default HW5;