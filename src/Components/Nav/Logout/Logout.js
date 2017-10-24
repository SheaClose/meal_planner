import { NavItem } from 'react-bootstrap';
import React from 'react';
const Logout = () => (
  <NavItem className="orange_border" eventKey={1} href="/logout">
    <span className="text_black">Logout </span>
  </NavItem>
);
export default Logout;
