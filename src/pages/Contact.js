import React from 'react';
import Layout from '../components/Layout';
import fax from '../images/icon-fax.gif';
import phone from '../images/icon-phone.gif'
import email from '../images/icon-email.gif'
import map from '../images/map.png'

const Contact = () => (
  <Layout>
    <div id="content">
    <div id="left">
      <ul id="nav">
        <li><a href="/History" className="sackville">Sackville: A Brief History</a></li>
        <li><a href="/About" className="about">About the Museum</a></li>
        <li><a href="/Events" className="events">Upcoming Events</a></li>
        <li><a href="/Community" className="Community">Community Links</a></li>
      </ul>
    </div>

    <div id="right">
      <h1>Contact Us</h1>
      <h2>Fultz House Museum</h2>
      <br />
      33 Sackville Drive<br />
      Lower Sackville, Nova Scotia<br />
      B4C 0E5<br /><br />
      <img src={phone} alt="Phone" width="12" height="9" className="icon" />
      Telephone: 902-865-3794<br />
      <img src={fax} alt="Fax" width="14" height="14" className="icon" />
      Fax: 902-865-6940<br />
      <img src={email} alt="Email" width="11" height="8" className="icon" />
      Email: <a href="mailto:fultz.house@ns.sympatico.ca">fultz.house@ns.sympatico.ca</a>

      <h2>Hours of Operation</h2>
      <p>Open 7 days a week, 10 am to 5 pm, during the months of July and August.</p>

      <h2>
        <a
          href="http://maps.google.ca/maps?f=q&source=s_q&hl=en&geocode=&q=fultz+house&sll=49.253745,13.093387&sspn=7.243247,19.577637&ie=UTF8&ll=44.757949,-63.664913&spn=0.030778,0.076475&z=14&iwloc=A"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={map} alt="Map of Fultz House Museum" id="map" />
          Directions
        </a>
      </h2>

      <p><em>From Highway 102/Airport:</em> Take Exit 4C onto Glendale Avenue. Turn left at the lights at Cobequid Road. Turn left at the Memory Lane lights. Follow signs to our parking area.</p>
      <p><em>From Bedford/Halifax:</em> Take Highway 101, exiting at Exit 1K (follow signs for Lower Sackville). At the lights, turn right onto Cobequid Road. Turn right at the Memory Lane lights. Follow signs to our parking area.</p>
      <p><em>From Dartmouth:</em> Take Highway 7 following signs to Sackville. Exit at Cobequid Road, turning left onto Memory Lane before reaching the lights. Follow signs to our parking area.</p>
      <p><em>From Windsor:</em> Take Highway 101 toward Halifax/Dartmouth, exiting at Beaverbank Road. Turn right at the first set of lights onto Old Sackville Road. At the end of Old Sackville Road, proceed straight ahead through the lights at Sackville Drive onto Cobequid Road. Turn right at the Memory Lane lights. Follow signs to our parking area.</p>
    </div>
    <div className="clear"></div>
    </div>
  </Layout>
);

export default Contact;
