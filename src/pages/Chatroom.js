import React, {Component} from 'react';
import axios from 'axios';

class Chatroom extends Component {
	state = {
		selectedFile: '',
	}
	
	fileSelectedHandler = event => {
		this.setState({
			selectedFile: event.target.files[0]
		})
	}

	fileUploadHandler = () => {
		axios.post('')
	}

	render() {
		return (
			<div>
				<input type='file' onChange={this.fileSelectedHandler} />
				<button onClick={this.fileUploadHandler}>Upload</button>
			</div>
		);
	}
}

export default Chatroom;