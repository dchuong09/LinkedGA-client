import React, {Component} from 'react'; 
import {NavLink, Link} from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav>
				    <div className="nav-wrapper">
				      <Link to='/' className="brand-logo">LinkedGA</Link>

				      {
				      	props.isAuthed 
				      	?   <ul id="nav-mobile" className="right hide-on-med-and-down">

				      		</ul>
				      }

				    </div>
				</nav>
			</div>
		)
	}
}

export default Navbar;