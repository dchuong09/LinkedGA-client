import React, {Component} from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import {Link} from 'react-router-dom';

class Login extends Component {
	state = {
		email: '',
		password: '',
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const userData = {
			email: this.state.email,
			password: this.state.password,
		}

		axios.post('http://localhost:8080/api/login', userData)
		  .then(res => {
		  	const { token } = res.data;
		  	// save to localStorage
		  	localStorage.setItem('jwtToken', token); 
		  	// set token to Auth Header
		  	setAuthToken(token);
		  	// Decode token to get user data
		  	const decoded = jwt_decode(token);
		  	// Set current user
		  	this.props.setCurrentUser(decoded);
		  	this.props.history.push('/profile');
		  })
		  .catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<div className="col s12 z-depth-4 card-panel">
			      <form className="login-form" onSubmit={this.handleSubmit}>
			        <div className="row">
			          <div className="input-field col s12 center">
			            <h4 className="center login-form-text">Login</h4>
			          </div>
			        </div>
			        <div className="row margin">
			          <div className="input-field col s12">
			            <i className="material-icons prefix">person</i>
			            <input id="username" type="email" name="email" value={this.state.email} onInput={this.handleChange} />
			            <label htmlFor="username" className="center-align">Email</label>
			          </div>
			        </div>
			        <div className="row margin">
			          <div className="input-field col s12">
			            <i className="material-icons prefix">lock</i>
			            <input id="password" type="password" name="password" value={this.state.password} onInput={this.handleChange} />
			            <label htmlFor="password">Password</label>
			          </div>
			        </div>
			        <div className="row">
			          <div className="input-field col s12">
			            <button type='submit' className="btn waves-effect waves-light col s12">Login</button>
			          </div>
			        </div>
			        <div className="row">
			          <div className="input-field col s6 m6 l6">
			            <p className="margin medium-small"><Link to='/signup'>Register Now!</Link></p>
			          </div>
			        </div>

			      </form>
			    </div>
			</div>
		);
	}
}

export default Login;