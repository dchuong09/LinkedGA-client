import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../styles/login.css';


class Signup extends Component {
	state = {
		name: '',
		email: '',
		location: '',
		github: '',
		course: '',
		status: '',
		password: '',
		password2: '',
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.password === this.state.password2) {
			const newUser = {
				name: this.state.name,
				email: this.state.email,
				location: this.state.location,
				status: this.state.status,
				course: this.state.course,
				github: this.state.github,
				password: this.state.password,
			}

			axios.post('http://localhost:8080/api/register', newUser)
			  .then(res => this.props.history.push('/login'))
			  .catch(err => console.log(err));
		}
	}

	render() {
		return (
			<div>
				<div id="register-page" className="row">
					<div className="col s12 z-depth-6 card-panel">
					<h4 className='center-align'>Register</h4>	
						<form className="register-form" method="post" onSubmit={this.handleSubmit}>        
							<div className="row margin">
								<div className="input-field col s12">
									<i className="material-icons prefix">person</i>
									<input id="user_name" type="text" className="validate" name="name" value={this.state.name} onInput={this.handleChange} />
									<label htmlFor="user_name" className="center-align">Name</label>
								</div>
							</div>
							<div className="row margin">
								<div className="input-field col s12">
									<i className="material-icons prefix">email</i>
									<input id="user_email" type="email" className="validate" name="email" value={this.state.email} onInput={this.handleChange} />
									<label htmlFor="user_email" className="center-align">Email</label>
								</div>
							</div>
							<div className="row margin">
								<div className="input-field col s12">
									<i className="material-icons prefix">place</i>
									<input id="user_location" type="text" placeholder="San Francisco, CA" className="validate" name="location" value={this.state.location} onInput={this.handleChange} />
									<label htmlFor="user_email" className="center-align">Location</label>
								</div>
							</div>
							<div className="row margin">
								<div className="input-field col s12">
									<i className="material-icons prefix">computer</i>
									<input id="user_github" type="text" placeholder="https://github.com/dchuong09" className="validate" name="github" value={this.state.github} onInput={this.handleChange} />
									<label htmlFor="user_email" className="center-align">Github</label>
								</div>
							</div>
							<div className="row margin">
								<div className="input-field col s12">
									<i className="material-icons prefix">assistant</i>
									<input id="course" type="text" className="validate" placeholder="WDI44" name="course" value={this.state.course} onInput={this.handleChange} />
									<label htmlFor="course" className="center-align">Course</label>
								</div>
							</div>
							<div className="row margin">
								<div className="input-field col s12">
									<i className="material-icons prefix">error</i>
									<input id="course" type="text" className="validate" placeholder="Looking for someone to collaborate on new project" name="status" value={this.state.status} onInput={this.handleChange} />
									<label htmlFor="course" className="center-align">Status</label>
								</div>
							</div>
							<div className="row margin">
								<div className="input-field col s12">
									<i className="material-icons prefix">lock</i>
									<input id="user_passw" type="password" className="validate" name="password" value={this.state.password} onInput={this.handleChange} />
									<label htmlFor="user_passw">Password</label>
								</div>
							</div>
							<div className="row margin">
								<div className="input-field col s12">
									<i className="material-icons prefix">lock</i>
									<input id="confirm_pass" type="password" name="password2" value={this.state.password2} onInput={this.handleChange} />
									<label htmlFor="confirm_pass">Re-type password</label>
								</div>
							</div>
							<div className="row">
								<div className="input-field col s12">
									<button type ='submit' className="btn waves-effect waves-light col s12">Register Now</button>
								</div>
								<div className="input-field col s12">
									<p className="margin center medium-small sign-up">Already have an account?<Link to='/login'>Login</Link></p>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Signup;