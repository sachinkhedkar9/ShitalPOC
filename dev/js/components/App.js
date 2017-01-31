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
      <div>
        <div className="col-lg-4 col-md-4 col-sm-3 col-xs-3"></div>
        <div className="html-page col-lg-4 col-md-4 col-sm-6 col-xs-6">
          <div className={styles.loginPage + "login-container sap-form"}>
            <form class="form-signin content" name="loginForm">
              <h2 class="form-signin-heading">Login</h2>
              <div className="login-form form-inline form-group" onSubmit={this.handleSubmit}>
                <div className="row bottom-margin">
                  <label for="username" className="col-lg-3 col-md-3 col-sm-3 col-xs-12">User Name</label>
                  <input type="text" ref="username" id="username" placeholder="User Name"
                    required="" autofocus="" name="username"
                    className="form-control col-lg-9 col-md-9 col-sm-9 col-xs-12" />
                </div>
                <div className="row bottom-margin">
                  <label for="inputPassword" className="col-lg-3 col-md-3 col-sm-3 col-xs-12">Password</label>
                  <input type="password" id="inputPassword" name="password" placeholder="Password"
                    className="form-control col-lg-9 col-md-9 col-sm-9 col-xs-12" required="" />
                </div>
                <div className="row bottom-margin">
                  <button className="sap-btn sap-btn-primary" onClick={this.handleSubmit.bind(this)}>
                    <i className="fa fa-sign-in" />{' '}Log In
                    </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-3 col-xs-3"></div>
      </div>
      /*
                    <input type="text" ref="username" placeholder="Enter a username"
                      className="form-control" />

              <div className="container">
                <h2>Form control: input</h2>
                <p>The form below contains two input elements; one of type text and one of type password:</p>
                <form>
                  <div className="form-group">
                    <label for="usr">Name:</label>
                    <input type="text" ref="username" placeholder="Enter a username" 
                                 className="form-control" />
                  </div>
                </form>
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
