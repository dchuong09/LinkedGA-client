import React, {Component} from 'react';
import axios from 'axios';
import faker from 'faker';
import '../styles/detailPage.css';

class DetailPage extends Component {
	state = {
		data: ''
	}

	componentDidMount = () => {
		let id = this.props.match.params.user_id;
		axios.get(`http://localhost:8080/api/users/${id}`)
		  .then(res => this.setState({ data: res.data }))
		  .catch(err => console.log(err));
	}

	render() {
		console.log('data', this.state.data)
		let img = faker.fake("{{image.abstract}}");


		console.log('userdata', this.state.user);
		let projectImg = faker.fake("{{image.nature}}");
		let projects = this.state.data.projects
		?  this.state.data.projects.map(project => {
			return (
				<div className="projects">
				<div class="row">
				    <div class="col s8 offset-m3">
				      <div class="card">
				        <div class="card-image">
				          <img src='./images.jpg' />
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


		return (
			<main>
					<div className="headerImg"></div>
					<div>
						<img className ="profileImg" src={`${img}`} alt="Avatar" />
					</div>
					<div className="profileInfo center-align">
						<h4>{this.state.data.name}</h4>
						<h7 className="course">{this.state.data.course}</h7>
						<br />
						<p><i className="material-icons">location_on</i>{this.state.data.location}</p>
						<a href={`${this.state.data.github}`}><i className="material-icons">computer</i> Github</a>
						<br />
						<br />

						<button className="btn waves-effect waves-light"  type="submit" name="action"><a className="atag" href="mailto:someone@example.com?Subject=Hello%20again">Email</a>
						    <i className="material-icons right">send</i>
						</button>
						<br />
						<hr />
						<h4>Projects</h4>
						{projects}
					</div>
				</main>
		);
	}
}

export default DetailPage;