import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Chatroom from './pages/Chatroom';
import DetailPage from './pages/DetailPage';


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

    }
  }

  render() {
    console.log('current user', this.state.currentUser)

    const PrivateRoute = ({component: Component, ...rest}) => (
      <Route {...rest} render={(props) => (
        this.state.isAuthenticated === true
          ? <Component {...props} user={this.state.currentUser}  />
          : <Redirect to='/login' />
      )} />
    )


    return (
      <div className="">
        <Navbar handleLogout={this.handleLogout} isAuthed={this.state.isAuthenticated} user={this.state.currentUser} />
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' render={ (props) => <Login {...props} setCurrentUser={this.setCurrentUser} /> } />
            <Route path='/chatroom' component={Chatroom} />
            <Route exact path='/:user_id' component={DetailPage} />
            <PrivateRoute path='/:user_id/profile' component={Profile}  />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
