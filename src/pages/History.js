import React from 'react';
import Layout from '../components/Layout';

const History = () => (
  <Layout>
    <div id="content">
      <div id="left">
        <ul id="nav">
          <li><a className="sackville current" href="/history">Sackville: A Brief History</a></li>
          <li><a className="about" href="/about">About the Museum</a></li>
          <li><a className="events" href="/events">Upcoming Events</a></li>
          <li><a className="links" href="/community">Community Links</a></li>
          <li><a className="brochures" href="/brochures">Historical Brochures</a></li>
        </ul>
      </div>

      <div id="right">
        <h1>A Brief History of Sackville</h1>
        
        <p className="right">
          <img className="caption" src="/images/photo01.png" alt="Felled trees line the riverbank" />
          Logging along the Sackville River brought many settlers to the Sackville area in the 1800s.
        </p>

        <p><span className="drop">S</span>ackville’s earliest roots as a settlement can be traced back to a fort built at the head of Bedford Basin...</p>

        <p className="left">
          <img className="caption" src="/images/photo02.png" alt="Local woodsmen" />
          Pictured are several local woodsmen preparing to move a log down the Sackville River...
        </p>

        <p>Joseph Scott, one of Sackville’s first residents, landed in Halifax in 1749...</p>

        <p className="right">
          <img className="caption" src="/images/photo03.png" alt="Horse-drawn buggy" />
          A mother and her three small children going for a ride in a horse-drawn buggy...
        </p>

        <p>Sackville’s location at the head of Bedford Basin proved to be a pivotal intersection...</p>

        <h2>The Fultz Family</h2>

        <p><span className="drop">I</span>n 1858, Bennett Fultz, a wheelwright and cabinet maker...</p>
      </div>
    </div>
  </Layout>
);

export default History;
