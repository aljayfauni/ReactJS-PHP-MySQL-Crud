import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';




class Insert extends Component{

    constructor(props){
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state={
            username:'',
            password:''

        }
    }

   onChangeUsername(e){
    this.setState({
     username: e.target.value   
    });

   } 

   onChangePassword(e){
    this.setState({
     password: e.target.value   
    });

   } 

   onSubmit(e){
e.preventDefault();

const obj ={

    username: this.state.username,
    password: this.state.password
};


axios.post('http://localhost/ReactFunction/Insert.php', obj)
.then(res=> console.log(res.data));
//console.log(obj);

    //*****clear form field after data inserted to database*****
    this.setState({
        username:'',
        password:''

    })

   } 


render(){
  return (
    <div className="Insert">
  <h1> Insert</h1>
		
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>Username:</label>
            <input type="text" placeholder="Username" className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
            </div>
            <div className="form-group">
                <label>Password:</label>
            <input type="password" placeholder="Username" className="form-control" value={this.state.password} onChange={this.onChangePassword} />
            </div>
            <div className="form-group">
                
            <input type="submit" value="Submit" className="btn btn-primary" />
                </div>
            </form>
    </div>
  );
  }
}

export default Insert;
