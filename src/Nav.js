import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';


class Nav extends Component{
	render(){
		
		
	
  return (
    <div className="Nav">
	
		<div className="Nav-Bar">
			<div className="logo">
			Registration System
		</div>
			<ul>
				<li><Link to={'/'}>Home</Link></li>
				<li><Link to={'/insert'}>Insert</Link></li>
				<li><Link to={'/view'}>View</Link></li>
			
			</ul>
		</div>
		
    </div>
  );
  }
}

export default Nav;
