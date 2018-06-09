import React from 'react'; 
import {Link} from 'react-router-dom';

const Navbar = (props) => {
	return (
		<div>
			<nav>
			    <div className="nav-wrapper #01579b light-blue darken-4">
			      <Link to='/' className="brand-logo">LinkedGA</Link>

			      {
			     	props.isAuthed 
				      	?   <ul id="nav-mobile" className="right hide-on-med-and-down">
				      			<li><Link to='/chatroom'>Chatroom</Link></li>
				      			<li><Link to={`/${props.user.id}/profile`}>Profile</Link></li>
				      			<li><Link onClick={props.handleLogout} to='/'>Logout</Link></li>
				      		</ul>
				      	:   <ul id="nav-mobile" className="right hide-on-med-and-down">
				      			<li><Link to='/chatroom'>Chatroom</Link></li>
				      			<li><Link to='/signup'>Signup</Link></li>
				      			<li><Link to='/login'>Login</Link></li>
				      		</ul>
			      }

			    </div>
			</nav>
		</div>
	)
}

export default Navbar;
	