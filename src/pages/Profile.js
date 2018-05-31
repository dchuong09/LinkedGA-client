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
		  .then(res => this.setState({user: res.data}))
		  .catch(err => console.log(err));
	}


	render() {
		console.log('user', this.state.user)

		return (
			<div>
				<div className='row'>
					<div className='profile'>
						<div className='col s3 offset-m3'>
							<div className='image-container'></div>
						</div>
						<div className='col s4'>
							<h4>Chuong D Dao</h4>
							<p>Github:</p>
							<p>https://github.com/dchuong09</p>
							<p>Location: San Francisco</p>
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
	}
}

export default Profile;