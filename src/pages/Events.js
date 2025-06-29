import React from 'react';
import logo from '../images/logo.png';

const Events = () => {
  return (
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
           <li><a className="about" href="#/about">About the Museum</a></li>
           <li><a className="events current" href="#/events">Upcoming Events</a></li>
           <li><a className="links" href="#/community">Community Links</a></li>
           <li><a className="brochures" href="#/brochures">Historical Brochures</a></li>
         </ul>

        </div>

        <div id="right">
          <h1>Upcoming Events</h1>

          <p>
            <a href="Seasonal Brochure 2024.pdf" className="Download Seasonal Brochure">Downloadable Seasonal Brochure</a>
          </p>

          <table>
            <tbody>
              <tr>
                <td className="month" colSpan="3"><span style={{ fontSize: '18px' }}>July 2024</span></td>
              </tr>
              <tr>
                <td className="date"><span style={{ fontSize: '14px' }}>1</span></td>
                <td>
                  <span style={{ fontSize: '16px' }}><strong>Canada Day</strong></span><br />
                  <span style={{ fontSize: '14px' }} className="desc">Flag Raising - Come picnic on the grounds</span>
                </td>
                <td className="time"><span style={{ fontSize: '14px' }}>11:00 - 11:30 am</span></td>
              </tr>
              <tr>
                <td className="date"><span style={{ fontSize: '14px' }}>1</span></td>
                <td>
                  <span style={{ fontSize: '16px' }}><strong>Canada Day</strong></span><br />
                  <span style={{ fontSize: '14px' }} className="desc">Baked Beans &amp; Brown Bread $10.00 - Tap Available</span>
                </td>
                <td className="time"><span style={{ fontSize: '14px' }}>11:30 - 1:30</span></td>
              </tr>

              <tr>
                <td className="month" colSpan="3"><span style={{ fontSize: '18px' }}>August 2024</span></td>
              </tr>
              <tr>
                <td className="date"><span style={{ fontSize: '14px' }}>14</span></td>
                <td>
                  <span style={{ fontSize: '16px' }}><strong>Fun Day</strong></span><br />
                  <span style={{ fontSize: '14px' }} className="desc">Come, Enjoy, Explore</span>
                </td>
                <td className="time"><span style={{ fontSize: '14px' }}>12:00 - 3:00</span></td>
              </tr>
              <tr>
                <td className="date"><span style={{ fontSize: '14px' }}>20</span></td>
                <td>
                  <span style={{ fontSize: '16px' }}><strong>Tuesday Tea</strong></span><br />
                  <span style={{ fontSize: '14px' }}>Tickets in Advance - Available at Museum Gift Shop</span>
                </td>
                <td className="time"><span style={{ fontSize: '14px' }}>12:00 - 1:30</span></td>
              </tr>

              <tr>
                <td className="month" colSpan="3"><span style={{ fontSize: '18px' }}>September 2024</span></td>
              </tr>
              <tr>
                <td className="date"><span style={{ fontSize: '14px' }}>14</span></td>
                <td>
                  <span style={{ fontSize: '16px' }}><strong>Makers Market</strong></span><br />
                  <span style={{ fontSize: '14px' }}>
                    To Book a Table <a href="mailto:jbboudreau78@gmail.com">Email Here</a>
                  </span>
                </td>
                <td className="time"><span style={{ fontSize: '14px' }}>10:00 - 3:00</span></td>
              </tr>

              <tr>
                <td className="month" colSpan="3"><span style={{ fontSize: '18px' }}>October 2024</span></td>
              </tr>
              <tr>
                <td className="date"><span style={{ fontSize: '14px' }}>17</span></td>
                <td>
                  <span style={{ fontSize: '16px' }}><strong>Heritage Dinner</strong></span><br />
                  <span style={{ fontSize: '14px' }}>
                    Support Fultz House - <a href="mailto:jbboudreau78@gmail.com">Tickets in Advance - Email Here</a><br />
                    Sackville Lions Club - Roast Beef Dinner
                  </span>
                </td>
                <td className="time"><span style={{ fontSize: '14px' }}>6:30 pm</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="clear"></div>
      </div>

      <div id="footer">
        <ul id="navFooter">
          <li><a href="#/history">Sackville History</a></li>
          <li><a href="#/about">About the Museum</a></li>
          <li><a href="#/events">Upcoming Events</a></li>
          <li><a href="#/community">Community Links</a></li>
          <li><a href="#/brochures">Brochures</a></li>
          <li><a href="#/contact">Contact Us</a></li>
          <li><a href="#/">Home</a></li>
      </ul>
        <div className="clear"></div>
      </div>

      <a id="facebook" href="https://www.facebook.com/FultzHouse/">Find us on Facebook</a>

      <p id="copyright">
        © 2025 Fultz Corner Restoration Society
        <span className="credit">
          Site designed and developed by <a href="mailto:yazan.shaker@gmail.com">Yazan Mahmoud</a>.<br />
        </span>
      </p>

      <div className="overlay"></div>
    </div>
  );
};

export default Events;