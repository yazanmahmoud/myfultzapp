import React from 'react';
import logo from '../images/logo.png';
import PhoneIcon from '../images/icon-phone.gif';

const Community = () => (
  <div id="container">
    <div id="header">
      <a href="./">
        <img alt="Fultz House Museum" id="logo" src={logo} />
      </a>
    </div>

    <div id="content">
      <div id="left">
        <ul id="nav">
         <li><a className="sackville" href="./history">Sackville: A Brief History</a></li>
         <li><a className="about" href="./about">About the Museum</a></li>
         <li><a className="events" href="./events">Upcoming Events</a></li>
         <li><a className="links current" href="./community">Community Links</a></li>
         <li><a className="brochures" href="./brochures">Historical Brochures</a></li>
        </ul>

      </div>

      <div id="right">
        <h1>Community Links</h1>
        <ul>
          <li><a href="#HRM">HRM Municipal Representatives (Councillors)</a></li>
          <li><a href="#MLA">Members of the Legislative Assembly (MLAs)</a></li>
          <li><a href="#MP">Members of Parliament (MPs)</a></li>
          <li><a href="#Tea">Event - Drive Thru Sponsors</a></li>
          <li><a href="#Museums">Nearby Historic Sites and Museums</a></li>
          <li><a href="#Sackville">Sackville Community Links</a></li>
          <li>
            <a
              href="http://www.hotelscombined.ca/Place/Lower_Sackville.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find Lower Sackville hotels at HotelsCombined
            </a>
          </li>
        </ul>

        <br /><br /><br />

        <table>
          <tbody>
            {/* HRM Councillors */}
            <tr id="HRM"><td className="label" colSpan={2}>HRM Municipal Representatives</td></tr>
            <tr>
              <td><a href="https://www.halifax.ca/city-hall/districts-councillors">Paul Russell</a> — District 15, Lower Sackville</td>
              <td className="number"><img src={PhoneIcon} alt="Phone" width="12" height="9" className="icon" /> 902-240-0441<br /><a href="mailto:paul.russell@halifax.ca">paul.russell@halifax.ca</a></td>
            </tr>
            <tr>
              <td><a href="https://www.halifax.ca/city-hall/districts-councillors/district-1">Cathy Deagle-Gammon</a> — District 1</td>
              <td className="number"><img src={PhoneIcon} alt="Phone" width="12" height="9" className="icon" /> 902-717-2718<br /><a href="mailto:cathy.deaglegammon@halifax.ca">cathy.deaglegammon@halifax.ca</a></td>
            </tr>

            {/* MLAs */}
            <tr id="MLA"><td className="label" colSpan={2}>Members of the Legislative Assembly (MLAs)</td></tr>
            <tr>
              <td><a href="https://nslegislature.ca/members/profiles/steve-craig">Steve Craig</a> (PC) — Sackville-Cobequid</td>
              <td className="number"><img src={PhoneIcon} alt="Phone" width="12" height="9" className="icon" /> 902-864-6271<br /><a href="mailto:steve.craig@novascotia.ca">steve.craig@novascotia.ca</a></td>
            </tr>
            <tr>
              <td><a href="https://nslegislature.ca/members/profiles/brad-bj-johns">Brad Johns (PC)</a> — Sackville-Uniacke</td>
              <td className="number"><img src={PhoneIcon} alt="Phone" width="12" height="9" className="icon" /> 902-865-6467<br /><a href="mailto:bradjohns4mla@gmail.com">bradjohns4mla@gmail.com</a></td>
            </tr>
            <tr>
              <td><a href="https://nslegislature.ca/members/profiles/brian-wong">Brian Wong (PC)</a> — Waverley-Fall River-Beaver Bank</td>
              <td className="number"><img src={PhoneIcon} alt="Phone" width="12" height="9" className="icon" /> 902-576-3411<br /><a href="mailto:brianwongmla@gmail.com">brianwongmla@gmail.com</a></td>
            </tr>

            {/* MPs */}
            <tr id="MP"><td className="label" colSpan={2}>Members of Parliament (MPs)</td></tr>
            <tr>
              <td><a href="https://www.ourcommons.ca/Members/en/darrell-samson(88333)">Darrell Samson</a> — Sackville–Preston–Chezzetcook</td>
              <td className="number"><img src={PhoneIcon} alt="Phone" width="12" height="9" className="icon" /> 902-861-2311<br /><a href="mailto:darrell.samson@parl.gc.ca">darrell.samson@parl.gc.ca</a></td>
            </tr>
            <tr>
              <td><a href="https://lenametlegediab.libparl.ca">Lena Metledge Diab</a> — Halifax West</td>
              <td className="number"><img src={PhoneIcon} alt="Phone" width="12" height="9" className="icon" /> 902-426-2217<br /><a href="mailto:lenametlege.diab@parl.gc.ca">lenametlege.diab@parl.gc.ca</a></td>
            </tr>

            {/* Sponsors */}
            <tr id="Tea"><td className="label" colSpan={2}>Event - Drive Thru Sponsors</td></tr>
            <tr><td><a href="http://www.paulrussell.ca/">Councillor Paul Russell</a></td><td className="number"><img src={PhoneIcon} alt="Phone" width="12" height="9" className="icon" /> 902-240-0441</td></tr>
            <tr><td><a href="http://www.halifax.ca/city-hall/districts-councillors/district-14/councillor-lisa-blackburn">Councillor Lisa Blackburn</a></td><td className="number"><img src={PhoneIcon} alt="Phone" width="12" height="9" className="icon" /> 902-579-7164</td></tr>
            <tr><td>Members, Volunteers and Friends of the Fultz Corner Restoration Society</td></tr>

            {/* Museums */}
            <tr id="Museums"><td className="label" colSpan={2}>Nearby Historic Sites and Museums</td></tr>
            {[
              ["https://uniacke.novascotia.ca/", "Uniacke Estate", "Mount Uniacke, NS"],
              ["http://www.scottmanor.ca/", "Scott Manor House", "Bedford, NS"],
              ["http://www.dartmouthheritagemuseum.ns.ca/", "Dartmouth Heritage Museum", "Dartmouth, NS"],
              ["http://coleharbourfarmmuseum.ca/", "Cole Harbour Heritage Farm Museum", "Cole Harbour, NS"],
              ["http://www.pc.gc.ca/en/lhn-nhs/ns/halifax", "Halifax Citadel", "Halifax, NS"],
              ["http://pc.gc.ca/en/lhn-nhs/ns/prince/", "Prince of Wales Tower", "Halifax, NS"],
              ["http://www.pc.gc.ca/en/lhn-nhs/ns/grandpre", "Grand-Pré Historic Site", "Grand-Pré, NS"]
            ].map(([url, name, location], i) => (
              <tr key={i}><td><a href={url}>{name}</a></td><td className="number">{location}</td></tr>
            ))}

            {/* Sackville */}
            <tr id="Sackville"><td className="label" colSpan={2}>Sackville Community Links</td></tr>
            {[
              ["http://www.sackvillenovascotia.ca/", "Sackville Official Website"],
              ["http://www.sackvillebusiness.com/", "Sackville Business Association"],
              ["http://www.thestadium.ca/", "Sackville Sports Stadium"],
              ["http://www.halifaxpubliclibraries.ca/branches/locations/sackville.html", "Sackville Public Library"],
              ["http://www.chebucto.ns.ca/Education/BSLN/", "Bedford Sackville Literacy Network"],
              ["http://www.sackvillerivers.ns.ca/", "Sackville Rivers Association"],
              ["http://www.novascotia.com/see-do/outdoor-activities/sackville-lakes-provincial-park/6057", "Second Lake Provincial Park"],
              ["http://www.springfieldlakerec.com/", "Springfield Lake Rec Centre"],
              ["http://www.millwood.ednet.ns.ca/", "Millwood High School"],
              ["http://www.beaverbank.ca/", "Beaver Bank"]
            ].map(([url, name], i) => (
              <tr key={i}><td><a href={url}>{name}</a></td><td className="number"></td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="clear"></div>
    </div>

    <div id="footer">
      <ul id="navFooter">
        <li><a href="./history">Sackville History</a></li>
        <li><a href="./about">About the Museum</a></li>
        <li><a href="./events">Upcoming Events</a></li>
        <li><a href="./community">Community Links</a></li>
        <li><a href="./brochures">Brochures</a></li>
        <li><a href="./contact">Contact Us</a></li>
        <li><a href="./">Home</a></li>
      </ul>
      <div className="clear"></div>
      </div>

      <a href="https://www.facebook.com/FultzHouse/" id="facebook">Follow us on Facebook</a>

      <p id="copyright">
        © 2024 Fultz Corner Restoration Society
        <span className="credit">
          Site designed and developed by <a href="mailto:tywalkland@hotmail.com">Ty Walkland</a>.<br />
          Managed by Paige Aziz
        </span>
      </p>
    

     <div className="overlay"></div>
   </div>
  
);

export default Community;
