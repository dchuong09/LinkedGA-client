import React, {Component} from 'react';
import axios from 'axios';
import '../styles/profile.css';

class Profile extends Component {
	state = {
		user: '',
	}

	componentDidMount = () => {
		axios.get('http://localhost:8080/api/users/current')
		  // .then(res => this.setState({ user: res.data }))
		  .then(res => console.log(res.data))
		  .catch(err => console.log(err));
	}


	render() {
		
		return (
			<div>
				<div className='row'>
					<div className='col s3 offset-s1'>
						<div className='image-container'></div>
						<div>
							<h4>Chuong D Dao</h4>
						</div>
					</div>
					<div className='col s8'>
						<div className=''>
							<h4>Profile</h4>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Profile;