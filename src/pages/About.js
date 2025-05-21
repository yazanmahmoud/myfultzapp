import React from 'react';
import { Link } from 'react-router-dom';
import photoBlacksmith from '../images/photoBlacksmith.png';
import logo from '../images/logo.png'; 

const About = () => (
  <div id="container">
    <div id="header">
      <a href="http://www.fultzhouse.ca/">
        <img id="logo" src={logo} alt="Fultz House Museum" />
      </a>
    </div>

    <div id="content">
      <div id="left">
        <ul id="nav">
          <li><Link className="sackville" to="/history">Sackville: A Brief History</Link></li>
          <li><Link className="about current" to="/about">About the Museum</Link></li>
          <li><Link className="events" to="/events">Upcoming Events</Link></li>
          <li><Link className="links" to="/community">Community Links</Link></li>
          <li><Link className="brochures" to="/brochures">Historical Brochures</Link></li>
        </ul>

        <h2>Purpose Statement</h2>
        <p className="small">
          To collect, preserve, and present the history and interests of Sackville, Lucasville,
          Beaver Bank/Kinsac and the surrounding area.
        </p>
        <a href="/about/Volunteer.pdf" target="_blank" rel="noopener noreferrer">
          A Volunteer Destination
        </a>
      </div>

      <div id="right">
        <h1>About Fultz House Museum</h1>

        <h2>Sackville's Heritage Portal</h2>
        <img
          alt="Blacksmith shop"
          className="photo"
          src={photoBlacksmith}
          width="211"
          height="161"
        />

        <p>
          <span className="drop">B</span>ennett and Mary Fultz's house, presently the site of the Fultz
          House Museum, remained in the family until the death of daughter Jane Emily Fultz in the
          1940s. ...
        </p>

        <h2>Statement of Purpose</h2>
        <p>
          The purpose of the Fultz Corner Restoration Society is to maintain the buildings and grounds
          as a community museum...
        </p>

        <p>The objectives of the society and museum include:</p>
        <ol>
          <li>The collection and preservation of artifacts, photographs and records of historical significance...</li>
          <li>Educating the public of the history ...</li>
          <li>Maintaining a pleasing aesthetic environment ...</li>
          <li>Focus should not be limited to one facet ...</li>
          <li>Adhering to the guidelines of the Collections Policy ...</li>
          <li>Organizing separate committees ...</li>
          <li>Preserving the natural woodlands ...</li>
        </ol>
      </div>

      <div className="clear" />
    </div>

    <footer id="footer">
      <ul id="navFooter">
        <li><Link to="/history">Sackville History</Link></li>
        <li><Link to="/about">About the Museum</Link></li>
        <li><Link to="/events">Upcoming Events</Link></li>
        <li><Link to="/community">Community Links</Link></li>
        <li><Link to="/brochures">Brochures</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><a href="http://www.fultz-house.ca/">Home</a></li>
      </ul>
      <div className="clear" />

      <a href="https://www.facebook.com/FultzHouse/" id="facebook">Follow us on Facebook</a>

      <p id="copyright">
        © 2024 Fultz Corner Restoration Society
        <span className="credit">
          Site designed and developed by <a href="mailto:tywalkland@hotmail.com">Ty Walkland</a>.<br />
          Managed by Paige Aziz
        </span>
      </p>
    </footer>

    <div className="overlay" />
  </div>
);

export default About;
