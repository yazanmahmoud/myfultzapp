import React from 'react';
import gazebo from '../images/gazebo.png';
import divHorz from '../images/divHorz.png';
import bgFooter from '../images/bgFooter.png';

export default function Footer() {
  return (
    <div id="footer">
      <img className="photo" src={gazebo} alt="Gazebo illustration" />
      <img className="photo" src={bgFooter} alt="Footer illustration" />
      <img className="photo" src={divHorz} alt="divHorz illustration" />
      <ul id="navFooter">
        <li><a href="/History">Sackville History</a></li>
        <li><a href="/About">About the Museum</a></li>
        <li><a href="/Events">Upcoming Events</a></li>
        <li><a href="/Community">Community Links</a></li>
        <li><a href="/Brochures">Brochures</a></li>
        <li><a href="/Contact">Contact Us</a></li>
        <li><a href="http://www.fultzhouse.ca/">Home</a></li>
      </ul>
      <a href="https://www.facebook.com/FultzHouse/" id="facebook">Follow us on Facebook</a>
      <p id="copyright">
        &copy; 2024 Fultz Corner Restoration Society
        <span className="credit">Site designed and developed by <a href="mailto:tywalkland@hotmail.com">Ty Walkland</a>. Managed by Paige Aziz</span>
      </p>
     </div>
  );
}
