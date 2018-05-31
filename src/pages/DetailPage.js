import React, {Component} from 'react';
import axios from 'axios';

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
		return (
			<div>
				<div className='row'>
					<div className='profile'>
						<div className='col s3 offset-m3'>
							<div className='image-container'></div>
						</div>
						<div className='col s4'>
							<h4>{this.state.data.name}</h4>
							<p>Github:</p>
							<a href={this.state.data.github}>{this.state.data.github}</a>
							<p>Location: {this.state.data.location}</p>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col s3 offset-m3'>
						<h4>Skills:</h4>
					</div>
				</div>
			</div>
		);
	}
}

export default DetailPage;