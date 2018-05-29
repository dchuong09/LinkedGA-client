import React, { Component } from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
// import Signup from './pages/Signup';
// import Login from './pages/Login';

class App extends Component {
  state = {
    currentUser: {},
    isAuthenticated: true,
  }

  componentDidMount() {
    let token;
    if (localStorage.getItem('jwtToken') === null) {
      this.setState({ isAuthenticated: false })
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.jwtToken);
      this.setState({ currentUser: token, isAuthenticated: true });
    }
  }

  setCurrentUser = (userData) => {
    this.setState({ currentUser: userData, isAuthenticated: true })
  }

  handleLogout = () => {
    if (localStorage.getItem('jwtToken') !== null) {
      localStorage.removeItem('jwtToken');
      this.setState({ currentUser: null, isAuthenticated: false });
      <Redirect to='/' />;
    }
  }

  render() {

    // const PrivateRoute = ({component: Component, ...rest}) => {
    //   <Route {...rest} render={(props) => (
    //       this.state.isAuthenticated === true
    //         ? <Component {...props} />
    //         : <Redirect to='/login' />
    //     )} />
    // }
           // <Route path='/signup' component={Signup} />
            // <Route path='/login' render={ (props) => <Login {...props} setCurrentUser={this.setCurrentUser} /> } />
    return (
      <div className="">
        <Navbar handleLogout={this.handleLogout} isAuthed={this.state.isAuthenticated} />
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
 
            <Route path='/profile' component={Profile} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
