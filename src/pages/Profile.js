import React, {Component} from 'react';
import '../styles/profile.css';

class Profile extends Component {
	state = {
		name: '',
		location: '',
		github: ''
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