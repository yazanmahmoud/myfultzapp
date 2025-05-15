import React from 'react';
import Layout from '../components/Layout';
import House from '../images/photoHouse.png';

const Home = () => (
  <Layout>
    <div id="content">
    <div id="left">
      <ul id="nav">
        <li><a className="sackville" href="/History">Sackville: A Brief History</a></li>
        <li><a className="about" href="/About">About the Museum</a></li>
        <li><a className="events" href="/Events">Upcoming Events</a></li>
        <li><a className="links" href="/Community">Community Links</a></li>
        <li><a className="brochures" href="/Brochures">Historical Brochures</a></li>
      </ul>
    </div>

    <div id="right">
      <h1>Welcome to Fultz House</h1>

      <p>Sackville's Heritage Portal</p>

      <p className="intro">
        <img
          alt="Front exterior shot of Fultz House Museum"
          className="photo"
          src={House}
        />
        <span className="drop">L</span>ocated at the corner of Nova Scotia's most famous intersection,
        Fultz House Museum's collections reflect over 200 years of Sackville history. Constructed in the
        1860s, Bennett Fultz's house is now home to hundreds of artifacts, photographs, and displays.
        Come discover Sackville's proud history for yourself!
      </p>

      <p>
        <strong>Land Acknowledgement Statement on Mi’kma’ki</strong><br />
        “We acknowledge that we are in Mi'kma'ki, the ancestral and unceded territory of the Mi'kmaq
        people.”
      </p>

      <p>
        <strong>African Ancestry Statement</strong><br />
        “We acknowledge that people of African descent have been in Nova Scotia for more than 400 years
        and we honour and offer gratitude to those ancestors of African descent who came before us to
        this land.”
      </p>

      <p>
        <strong>A Statement of Acknowledgement on Acadian Culture and Heritage</strong><br />
        “We recognize and celebrate not only the historical roots of Acadians, but also the ongoing
        strength and resiliency of its people, and an invaluable culture, artistry and heritage, vibrant
        traditions, in addition to the crucial role that historic and thriving Acadian communities have
        played in shaping the rich, intricate cultural tapestry of Nova Scotia.”
      </p>

      <h2>Where to find us</h2>
      <p>
        Fultz House Museum is located at the intersection between Old Sackville Road, Sackville Drive
        and Cobequid Road in Lower Sackville, Nova Scotia.
      </p>
      <p>
        Click on the <a href="/Contact">Contact Us</a> page for more information and directions.
      </p>

      <div className="hours">
        <p>
          <strong>The Museum is open to the public as follows:</strong>
        </p>
        <p>
          <strong>June:</strong><br />
          Sunday 10am - 5pm<br />
          Saturday 10am - 5pm
        </p>
        <p>
          <strong>July and August:</strong><br />
          Sunday 10am - 5pm<br />
          Monday - Friday 11am - 5pm<br />
          Saturday 10am - 5pm
        </p>
        <p>
          <strong>Off-season tours by appointment:</strong> Email{' '}
          <a href="mailto:fultz.house@ns.sympatico.ca?subject=Fultz House Tour Request">
            fultz.house@ns.sympatico.ca
          </a>{' '}
          or call 902-865-3794
        </p>
      </div>

      <p>Admission by donation.</p>

      <p>
        Some artifacts are viewable online through{' '}
        <a href="http://www.novamuse.ca" target="_blank" rel="noopener noreferrer">
          Nova Muse
        </a>
      </p>
    </div>
    <div className="clear"></div>
    </div>
  </Layout>
);

export default Home;
