import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
require('../../scss/style.scss');

const styles = require('../../scss/App.scss');
const Dashboard = () => (
		
    
		
    
    <div className={styles.app}>
   
    <Navbar fixedTop>
     

      <Navbar.Collapse eventKey={0}>
        <Nav navbar>
        
          <LinkContainer to="/about">
            <NavItem>About Us</NavItem>
          </LinkContainer>

            </Nav>
      </Navbar.Collapse>
    </Navbar>

   
  </div>
);

export default Dashboard;
