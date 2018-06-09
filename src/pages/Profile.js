import React, {Component} from 'react';
import axios from 'axios';
import faker from 'faker';
import '../styles/profile.css';

class Profile extends Component {
	state = {
		user: [],
		namee: '',
		githubLink: '',
		siteLink: '',
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
			
				[e.target.name]: e.target.value
		})
	}

	handleAddProject = () => {
		this.setState({ 
			...this.state.user,
			editable: false
		})
	}

	handleSubmit = e => {
        let userId = this.props.match.params.user_id;
        const newProject = {
        	namee: this.state.namee,
        	githubLink: this.state.githubLink,
        	siteLink: this.state.siteLink,
        	photo: this.state.photo,
        }
        axios.post(`http://localhost:8080/api/${userId}/profile`, newProject)
            .then(json => this.setState({
            	user: {
            		...this.state.user,
            		projects: [...this.state.user.projects, json]
            	}, 
            }));
	}

	render() {
		console.log('userdata', this.state.user);
		let projectImg = faker.fake("{{image.nature}}");
		let projects = this.state.user.projects
		?  this.state.user.projects.map(project => {
			return (
				<div className="projects">
				<div class="row">
				    <div class="col s8 offset-m8">
				      <div class="card">
				        <div class="card-image">
				          <img src='data:image/jpeg;base64,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' />
				        </div>
				        <div class="card-content">
				          <p>{project.namee}</p>
				        </div>
				        <div class="card-action">
				          <a href={`${project.siteLink}`}>Site</a>
				          <a className="github" href={`${project.githubLink}`}>Github</a>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>
			);
		})
		:  <h4>Loading...</h4>


		let img = faker.fake("{{image.abstract}}");
		if (this.state.editable && this.state.user) {
			return (
				<main>
					<div className="headerImg"></div>
					<div>
						<img className ="profileImg" src={`${img}`} alt="Avatar" />
					</div>
					<div className="profileInfo center-align">
						<h4>{this.state.user.name}</h4>
						<h7 className="course">{this.state.user.course}</h7>
						<br />
						<p><i className="material-icons">location_on</i>{this.state.user.location}</p>
						<a href={`${this.state.user.github}`}><i className="material-icons">computer</i> Github</a>
						<br />
						<br />

						<button className="btn waves-effect waves-light" type="submit" name="action">Email
						    <i className="material-icons right">send</i>
						</button>
						<button type='edit' onClick={this.handleAddProject} className="waves-effect waves-light btn">Add Project</button>

						<hr />
						
					</div>
					<div>
						{projects}
					</div>
				</main>
			)
		} else {
			return(
	            <div className="createProjectForm">
	                <form className="form-group" onSubmit={this.handleSubmit}>
	                    <label>Name:</label>
	                    <input className="form-control" name="namee" onInput={this.handleChange} type="text"  value={this.state.namee}/>
	                    <label>Github:</label>
	                    <input className="form-control" name="githubLink" onInput={this.handleChange} type="text"  value={this.state.githubLink}/>
	                    <label>SiteLink:</label>
	                    <input className="form-control" name="siteLink" onInput={this.handleChange} type="text" value={this.state.siteLink}/>
	                    <button className="btn btn-info" type="submit" >Create</button>
	                </form>
	            </div>
            )
		}
	}
}




export default Profile;