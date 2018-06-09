import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../styles/homepage.css';

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
				<div key={user._id} className="userCards">
					<div className="row">
					    <div className="col s11 offset-m4">
						<Link to={`/${user._id}`}>
					      <div className="card">
					        <div className="card-image">
					          <img src="data:image/jpeg;base64,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" />
					        </div>
					        <div className="card-content">
					        	<div className="cardInfo">
					          <p className="namee">{user.name}</p>
					          <p className="location">{user.location}</p>
					          </div>
					        </div>
					      </div>
					  </Link>
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