import React from 'react';
import logo from '../images/logo.png';

export default function Header() {
  return (
    <div id="header">
      <a href="http://www.fultzhouse.ca/">
        <img alt="Fultz House Museum" id="logo" src={logo} />
      </a>
     </div>
  );
}
