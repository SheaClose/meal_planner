import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from './Logout/Logout';
import Login from './Login/Login';
import './NavComponent.css';

class NavComponent extends Component {
  render() {
    return (
      <Navbar className="nav_component" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img src="./assets/logo.png" alt="Brand Logo" />
              <h3>
                FATS <span id="orange_font">| MEAL</span>{' '}
                <span className="hightlighted_text"> PLANNER</span>
              </h3>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="button_container" pullRight>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem href="/#/addItem">Add Item</MenuItem>
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
            {this.props.isLoggedIn ? <Logout /> : <Login />}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default connect(state => state)(NavComponent);
