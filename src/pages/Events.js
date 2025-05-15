import React from 'react';
import Layout from '../components/Layout';

const Events = () => (
  <Layout>
    <div id="content">
      <div id="left">
      <ul id="nav">
        <li><a className="sackville" href="/History">Sackville: A Brief History</a></li>
        <li><a className="about" href="/About">About the Museum</a></li>
        <li><a className="events current" href="/Events">Upcoming Events</a></li>
        <li><a className="links" href="/Community">Community Links</a></li>
        <li><a className="brochures" href="/Brochures">Historical Brochures</a></li>
      </ul>
    </div>

    <div id="right">
      <h1>Upcoming Events</h1>
      <p><a className="Download Seasonal Brochure" href="/Seasonal Brochure 2024.pdf" download>Downloadable Seasonal Brochure</a></p>

      <table>
        <tbody>
          {/* July */}
          <tr>
            <td className="month" colSpan="3">
              <span style={{ fontSize: '18px' }}>July 2024</span>
            </td>
          </tr>
          <tr>
            <td className="date">1</td>
            <td>
              <strong>Canada Day</strong><br />
              <span className="desc">Flag Raising - Come picnic on the grounds</span>
            </td>
            <td className="time">11:00 - 11:30 am</td>
          </tr>
          <tr>
            <td className="date">1</td>
            <td>
              <strong>Canada Day</strong><br />
              <span className="desc">Baked Beans &amp; Brown Bread $10.00 - Tap Available</span>
            </td>
            <td className="time">11:30 - 1:30</td>
          </tr>

          {/* August */}
          <tr>
            <td className="month" colSpan="3">
              <span style={{ fontSize: '18px' }}>August 2024</span>
            </td>
          </tr>
          <tr>
            <td className="date">14</td>
            <td>
              <strong>Fun Day</strong><br />
              <span className="desc">Come, Enjoy, Explore</span>
            </td>
            <td className="time">12:00 - 3:00</td>
          </tr>
          <tr>
            <td className="date">20</td>
            <td>
              <strong>Tuesday Tea</strong><br />
              Tickets in Advance - Available at Museum Gift Shop
            </td>
            <td className="time">12:00 - 1:30</td>
          </tr>

          {/* September */}
          <tr>
            <td className="month" colSpan="3">
              <span style={{ fontSize: '18px' }}>September 2024</span>
            </td>
          </tr>
          <tr>
            <td className="date">14</td>
            <td>
              <strong>Makers Market</strong><br />
              To Book a Table <a href="mailto:jbboudreau78@gmail.com">Email Here</a>
            </td>
            <td className="time">10:00 - 3:00</td>
          </tr>

          {/* October */}
          <tr>
            <td className="month" colSpan="3">
              <span style={{ fontSize: '18px' }}>October 2024</span>
            </td>
          </tr>
          <tr>
            <td className="date">17</td>
            <td>
              <strong>Heritage Dinner</strong><br />
              Support Fultz House - <a href="mailto:jbboudreau78@gmail.com">Tickets in Advance - Email Here</a><br />
              Sackville Lions Club - Roast Beef Dinner
            </td>
            <td className="time">6:30pm</td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className="clear"></div>
    </div>
  </Layout>
);

export default Events;
