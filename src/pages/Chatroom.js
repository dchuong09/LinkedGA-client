import React, {Component} from 'react';
import axios from 'axios';
import faker from 'faker';
import '../styles/chatroom.css'

class Chatroom extends Component {
	state = {
		data: '',
		name: '',
		message: '',
	}

	componentDidMount = () => {
		axios.get('http://localhost:8080/api/chatroom')
		  .then(data => this.setState({data: data.data}))
		  .catch(err => console.log(err));
	}

	handleChange = e => {
		this.setState({[e.target.name]: e.target.value});
	}

	createPost = e => {
		e.preventDefault();
		fetch('http://localhost:8080/api/chatroom', {
			method: 'POST',
			headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		  	name: this.state.name,
		    message: this.state.message
		  })
		}).then(res => {
			return res.json();
		}).then(json => {
			this.setState({
				data: [...this.state.data, json],
				name: '', 
				message: ''
			})
		})
	}
	
	render() {
		console.log('data', this.state.data);
		let img = faker.fake("{{image.abstract}}");
		let results = this.state.data
		?  this.state.data.map(result => {
			return (
				<div key={result._id}>
					<div class="row">
						<div class="chatlogss">
							<div class="chat friend">
								<img src={`${img}`} class="user-photo"></img>
								<p class="chat-message"><span className="namee">{result.name}:</span> <br /> <span className="msg">{result.message}</span></p>	
							</div>
						</div>
					</div>
				</div>
			)
		})
		:  <h4>Loading...</h4>

		return (
			<div>
				<div className="recContainer"> 
				<h1 className='center-align rectitle'>ChatRoom</h1>
					<div className="row">
					
					   <form className="col s9 offset-s1 messageContainer" onSubmit={this.createPost}>
					     <div className="row">
					       <div className="input-field col s4">
					         <i className="material-icons prefix">account_circle</i>
					         <input 
					           id="icon_prefix" 
					           type="text" 
					           className="materialize-textarea"
					           autoFocus={this.props.autoFocus}
					           name='name'
					           onChange={this.handleChange}
					           value={this.state.name} 
					           placeholder="Name"/>

					       </div>
					       <div className="input-field col s7">
					         <i className="material-icons prefix">mode_edit</i>
					         <input 
					           id="icon_prefix2" 
					           className="materialize-textarea"
					           onChange={this.handleChange}
					           name='message'
					           value={this.state.message} 
					           placeholder="Message..."/>

					       </div>
					     </div>
					     <button className="btn-floating btn-small waves-effect waves-light"><i className="material-icons">add</i></button>
					   </form>
					 </div>

					 <div className='center-align'>
						
						
					 <div>{results}</div>
					</div>
				</div>

				
			</div>
		);
	}
}

export default Chatroom;