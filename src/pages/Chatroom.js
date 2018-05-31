import React, {Component} from 'react';
import axios from 'axios';

class Chatroom extends Component {
	state = {
		data: '',
		name: '',
		message: '',
	}

	componentDidMount = () => {
		axios.get('http://localhost:8080/api/chatroom')
		  .then(data => this.setState({ data }))
		  .catch(err => console.log(err));
	}

	handleChange = e => {
		// [e.target.name]: e.target.value
	}
	
	render() {
		return (
			<div>
				<div className="recContainer"> 
				<h1 className='center-align rectitle'>ChatRoom</h1>
					<div className="row">
					   <form className="col s12" onSubmit={this.createPost}>
					     <div className="row">
					       <div className="input-field col s6">
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
					       <div className="input-field col s6">
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
						
						

					</div>
				</div>
			</div>
		);
	}
}

export default Chatroom;