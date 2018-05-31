import React, {Component} from 'react';
import axios from 'axios';
import '../styles/profile.css';

class Profile extends Component {
	state = {
		user: [],
		editable: true,
	}

	componentDidMount = () => {
		let id = this.props.match.params.user_id;
		axios.get(`http://localhost:8080/api/${id}/profile`)
		  .then(res => this.setState({ user: res.data }))
		  .catch(err => console.log(err));
	}

	handleChange = e => {
		this.setState({
			user: {
				...this.state.user,
				[e.target.name]: e.target.value
			}
		})
	}

	handleEdit = () => {
		this.setState({ 
			...this.state.user,
			editable: false
		})
	}

	handleSubmit = e => {
		e.preventDefault();
		const user = this.state.user;
        let userId = this.props.match.params.user_id;

        axios.put(`http://localhost:8080/api/${userId}/profile`, user)
            .then(res => {
                let updatedUser = res.data;
                
                this.setState({ 
                    drinks: updatedUser,
                    editable: true
                })
            });
	}

	render() {
		console.log('user', this.state.user)
		if (this.state.editable && this.state.user) {
			return (
				<div>
					<div className='row'>
						<div className='profile'>
							<div className='col s3 offset-m3'>
								<div className='image-container'></div>
							</div>
							<div className='col s4'>
								<h4>{this.state.user.name}</h4>
								<p>Github:</p>
								<a href={this.state.user.github}>{this.state.user.github}</a>
								<p>Location: {this.state.user.location}</p>
								<button type='edit' onClick={this.handleEdit} class="waves-effect waves-light btn">Edit</button>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col s3 offset-m3'>
							<h4>Skills:</h4>
						</div>
					</div>
				</div>
			)
		} else {
			return(
	            <div className="updateProfileForm">
	                <form className="form-group" onSubmit={this.handleSubmit}>
	                    <label>Name:</label>
	                    <input className="form-control" name="name" onInput={this.handleChange} type="text"  value={this.state.user.name}/>
	                    <label>Github:</label>
	                    <input className="form-control" name="github" onInput={this.handleChange} type="text"  value={this.state.user.github}/>
	                    <label>Location:</label>
	                    <input className="form-control" name="location" onInput={this.handleChange} type="text" value={this.state.user.location}/>
	                    <button className="btn btn-info" type="submit" >Save Event</button>
	                </form>
	            </div>
            )
		}
	}
}

export default Profile;