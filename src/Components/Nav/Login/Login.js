import { NavItem } from 'react-bootstrap';
import React, { Component } from 'react';
import Auth from '../../../Auth/Auth';
const auth = new Auth();

export default class Login extends Component {
  render() {
    return (
      <NavItem className="orange_border" eventKey={1}>
        <span onClick={() => auth.login()} className="text_black">
          Log-In / Sign-Up{' '}
        </span>
      </NavItem>
    );
  }
}
