import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Link} from 'react-router-dom';
import axios from 'axios';
import RecordsList from './RecordsList';

class View extends Component{

		constructor(props){
            super(props);
            this.state = {users: []};
        }

       componentDidMount(){
            axios.get('http://127.0.0.1:8080/ReactFunction/view.php')
            .then(response => {
                this.setState({users: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
        }
	
	usersList(){
        return this.state.users.map(function(object, i){
            return <RecordsList obj={object} key={i} />;
        });
    }

render() {
  return (
    <div className="View">
       <br/>
     <h1>ViewPage</h1>
    <br/>
    <table className='table table-striped w-75 p-3 mx-auto'>
        <thead>
            <tr>
            <th>ID</th>
                <th>Username</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody>
          
                { this.usersList() }
         
        </tbody>
    </table>
		
    </div>
    
  );
  }
}
//}


export default View;
