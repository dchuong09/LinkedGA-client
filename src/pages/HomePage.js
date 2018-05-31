import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class HomePage extends Component {
	state = {
		users: ''
	}

	


	componentDidMount() {
		axios.get('http://localhost:8080/api/users')
		  .then(res => this.setState({users: res.data}))
		  .catch(err => console.log(err));
	}


	render() {

		let result = this.state.users 
		? this.state.users.map(user => {
			return (
				<div key={user._id}>
					<div className="row">
					    <div className="col s3">
					      <div className="card">
					        <div className="card-image">
					          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_sCRzU2nT84Jzch54d2jiMoZbzXdMuEPR78kR0m05Mkl-FfKF" />
					        </div>
					        <div className="card-content">
					          <p>{user.name}</p>
					        </div>
					      </div>
					    </div>
					  </div>
				</div>
			)
		})
		: <h4>Loading...</h4>

		return (
			<div>

				{result}
            
			</div>	
		)
	}
}

export default HomePage;