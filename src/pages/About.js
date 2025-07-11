import React from 'react';
import photoBlacksmith from '../images/photoBlacksmith.png';
import logo from '../images/logo.png';

const About = () => (
  <div id="container">
    <div id="header">
      <a href="#/">
        <img id="logo" src={logo} alt="Fultz House Museum" />
      </a>
    </div>

    <div id="content">
      <div id="left">
        <ul id="nav">
         <li><a className="sackville" href="#/history">Sackville: A Brief History</a></li>
         <li><a className="about current" href="#/about">About the Museum</a></li>
         <li><a className="events" href="#/events">Upcoming Events</a></li>
         <li><a className="links" href="#/community">Community Links</a></li>
         <li><a className="brochures" href="#/brochures">Historical Brochures</a></li>
        </ul>

        <h2>Purpose Statement</h2>
        <p className="small">
          To collect, preserve, and present the history and interests of Sackville, Lucasville,
          Beaver Bank/Kinsac and the surrounding area.
        </p>
        <a href={`${process.env.PUBLIC_URL}/brochures/Volunteer.pdf`} target="_blank" rel="noopener noreferrer">
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
          <span className="drop">B</span>ennett and Mary Fultz's house, presently the site of the
          Fultz House Museum, remained in the family until the death of daughter Jane Emily Fultz
          in the 1940s. New tenants made several renovations to the building, adding a bay window,
          arched doorway, and enlarging the living room. By 1979, the house was in the hands of
          the provincial government and faced a demolition order to make room for an extended
          highway. Several concerned individuals and community organizations came together to
          establish the Fultz Corner Restoration Society in an attempt to save the historic house.
          The Society successfully leased the property from the provincial government, and was
          able to open the new Fultz House Museum on July 1, 1982. Today, the non-profit Fultz
          House Museum stands as a testament to the dedication of Sackville's committed
          volunteers, providing visitors with the chance to experience over 200 years of community
          history. Beyond the house itself, the Museum's collections have expanded to include an
          original cooperage (removed board-by-board from the Grace property in Middle Sackville)
          and a working replica of A.J. Smeltzer's Lower Sackville blacksmith shop. Now owned by
          the Fultz Corner Restoration Society, Fultz House has also been designated as a Halifax
          County heritage property.
        </p>

        <h2>Statement of Purpose</h2>
        <p>
          The purpose of the Fultz Corner Restoration Society is to maintain the buildings and
          grounds as a community museum, and to collect, study and preserve those objects and
          artifacts that best illustrate the founding, settlement and development of the Sackville,
          Beaver Bank, and Lucasville areas from the time of earliest settlement to the present.
        </p>

        <p>The objectives of the society and museum include:</p>
        <ol>
          <li>The collection and preservation of artifacts, photographs and records of historical
            significance relative to the social and economic development of the Sackville, Beaver
            Bank and Lucasville areas.
          </li>
          <li>Educating the public of the history of the Sackville, Beaver Bank and Lucasville areas
            by providing interaction between the Museum and the community and schools through
            exhibits, tours, programs, teas and special events.
          </li>
          <li>Maintaining a pleasing aesthetic environment evoking the history of Sackville and areas
            through the various buildings and gardens on the property.
          </li>
          <li>Since the museum services a large community then the focus of the museum should not be
            limited to only one facet of its history.
          </li>
          <li>Adhering to the guidelines of the Collections Policy by the periodical review of
            artifacts.
          </li>
          <li>Separate committees will be organized, as required, to further various aspects of the
            operation of the museum and to better utilize the expertise of its members and
            volunteers.
          </li>
          <li>The remaining natural woodlands on the property shall be maintained and preserved as a
            site for the study and appreciation of examples of the natural history of the area, and
            that this site be made accessible through paths and the appropriate signage.
          </li>
        </ol>
      </div>

      <div className="clear"></div>
    </div>

    <div id="footer">
      <ul id="navFooter">
         <li><a href="/history">Sackville History</a></li>
        <li><a href="#/about">About the Museum</a></li>
        <li><a href="#/events">Upcoming Events</a></li>
        <li><a href="#/community">Community Links</a></li>
        <li><a href="#/brochures">Brochures</a></li>
        <li><a href="#/contact">Contact Us</a></li>
        <li><a href="#/">Home</a></li>
      </ul>

      <div className="clear"></div>
    </div>

      <a href="https://www.facebook.com/FultzHouse/" id="facebook">Follow us on Facebook</a>

      <p id="copyright">
        © 2025 Fultz Corner Restoration Society
        <span className="credit">
          Site designed and developed by <a href="mailto:yazan.shaker@gmail.com">Yazan Mahmoud</a>.<br />
        </span>
      </p>

      <div className="overlay" />
    </div>
  
);

export default About;
