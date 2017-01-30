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
          <div className={styles.loginPage}>
            <h2>Login</h2>

            <form>
              <div className="login-form form-inline form-group" onSubmit={this.handleSubmit}>
                <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <input type="text" ref="username" placeholder="Enter a username"
                    className="form-control" />
                </div>
                <button className="btn btn-lg btn-success" onClick={this.handleSubmit.bind(this)}>
                  <i className="fa fa-sign-in" />{' '}Log In
                  </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-3 col-xs-3"></div>
      </div>
      /*
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
