import React, { Component, PropTypes } from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions/index';
require('../../scss/style.scss');



class App extends Component {

  handleSubmit(event) {
    event.preventDefault();
    console.log("this.refs.username==", this.refs.username.value);
    const input = this.refs.username;
    //this.props.pushState('/dashboard');
    this.props.login(input.value);
    input.value = '';
  }

  render() {
    const styles = require('../../scss/Login.scss');
    return (
      <div className="html-page col-lg-3 col-md-4 col-sm-6 col-xs-6">
        <div className={styles.loginPage + ' container'}>
          <h1>Login</h1>

          <div>
            <form className="login-form form-inline" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input type="text" ref="username" placeholder="Enter a username" className="form-control" />
              </div>
              <button className="btn btn-lg btn-success" onClick={this.handleSubmit.bind(this)}><i className="fa fa-sign-in" />{' '}Log In
                  </button>
            </form>
          </div>
        </div>
      </div>
      /*   <div className={styles.app}>
          <LinkContainer to="/dashboard">
          <button>test</button>
        </LinkContainer>
        </div>*/
    );
  }
}

function mapStateToProps(state) {
  return {
    //users: state.users
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ login: login }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(App);
