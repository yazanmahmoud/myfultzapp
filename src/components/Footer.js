import React from 'react';

export default function Footer() {
  return (
    <div id="footer">
      <ul id="navFooter">
        <li><a href="history/">Sackville History</a></li>
        <li><a href="about/">About the Museum</a></li>
        <li><a href="events/">Upcoming Events</a></li>
        <li><a href="links/">Community Links</a></li>
        <li><a href="brochures/">Brochures</a></li>
        <li><a href="/contact.html">Contact Us</a></li>
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
