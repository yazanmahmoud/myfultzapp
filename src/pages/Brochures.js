import React from 'react';
import Layout from '../components/Layout';

const brochures = [
  { href: '/brochures/AfternoonTea.pdf', title: 'A History of Afternoon Tea' },
  { href: '/brochures/Laundry.pdf', title: 'A History of Laundry' },
  { href: '/brochures/Theater.pdf', title: "A Theater Lover's Delight - The Sackville Drive-in" },
  { href: '/brochures/Abraham.pdf', title: 'Great Minds of Sackville - Abraham Gesner and George Lawson' },
  { href: '/brochures/Soap.pdf', title: 'All About Soap & Candle Making' },
  { href: '/brochures/Captain.pdf', title: 'Captain John Gorham - Hero or Monster?' },
  { href: '/brochures/Fenerty.pdf', title: 'Charles Fenerty: The Life & Times' },
  { href: '/brochures/Childhood.pdf', title: 'Childhood Play' },
  { href: '/brochures/Chocolate.pdf', title: 'Chocolate Chip Trip - A History of Cookies' },
  { href: '/brochures/Citizens.pdf', title: 'Citizens Who Care: The Stories of Ted B. Blackburn and Gertrude Parker' },
  { href: '/brochures/Cornwallis.pdf', title: 'Cornwallis - The Controversial Founder of Halifax' },
  { href: '/brochures/Craftspeople.pdf', title: 'Craftspeople in the Community' },
  { href: '/brochures/BeaverBank.pdf', title: 'Early Life & Social Developments in Beaver Bank' },
  { href: '/brochures/Favorite.pdf', title: 'Favorite Things' },
  { href: '/brochures/Folklore.pdf', title: 'Folklore is...' },
  { href: '/brochures/SiptoCash.pdf', title: 'From Sip to Cash - The Savvy Bottle Collector' },
  { href: '/brochures/Galloping.pdf', title: 'Galloping into the Past...The Sackville Downs Story' },
  { href: '/brochures/Games.pdf', title: 'Games From Long Ago' },
  { href: '/brochures/Ghost.pdf', title: 'Ghost Stories @ Fultz House' },
  { href: '/brochures/Ghostly.pdf', title: 'Ghostly Encounters' },
  { href: '/brochures/GhostlyG.pdf', title: 'Ghostly Going-On' },
  { href: '/brochures/GhostlyT.pdf', title: 'Ghostly Tales' },
  { href: '/brochures/HTB.pdf', title: 'Harold T. Barrett - Mr. Beaver Bank' },
  { href: '/brochures/Heading.pdf', title: 'Heading Down the Rails - A Look at Railway Heritage' },
  { href: '/brochures/Sackville.pdf', title: 'Historic Sackville: The Early Years' },
  { href: '/brochures/Outhouses.pdf', title: 'How Outhouses Came To Be' },
  { href: '/brochures/Leading.pdf', title: 'Leading the Charge...One Step Forward' },
  { href: '/brochures/Leslie.pdf', title: 'Leslie Thomas & A.J. Smeltzer' },
  { href: '/brochures/EnglishCooking.pdf', title: 'Out of Sackville Kitchens - English Cooking' },
  { href: '/brochures/FrenchCooking.pdf', title: 'Out of Sackville Kitchens - French Cooking' },
  { href: '/brochures/GermanStaples.pdf', title: 'Out of Sackville Kitchens - German Staples' },
  { href: '/brochures/Prepping.pdf', title: 'Prepping for Food in Old Sackville Kitchens' },
  { href: '/brochures/Business.pdf', title: "Sackville's Business Heritage" },
  { href: '/brochures/Destinations.pdf', title: 'Sackville Destinations' },
  { href: '/brochures/Parties.pdf', title: 'Tea Parties - Endless Possibilities' },
  { href: '/brochures/Teaching.pdf', title: 'Teaching and Learning in a One & Two Room School House' },
  { href: '/brochures/Coopering.pdf', title: 'The Art of Coopering' },
  { href: '/brochures/Cenotaph.pdf', title: 'The Cenotaph at Sackville Heritage Park' },
  { href: '/brochures/Cure.pdf', title: 'The Cure for What Ails You...Homemade & Natural Remedies' },
  { href: '/brochures/Extraordinary.pdf', title: 'The Extraordinary Woman of Sackville' },
  { href: '/brochures/Fultz.pdf', title: 'The Fultz Family in Perspective' },
  { href: '/brochures/Grove.pdf', title: 'The Grove Finishing School' },
  { href: '/brochures/Hand-stitched.pdf', title: 'The History of Hand-stitched Creations' },
  { href: '/brochures/FolkloreHolidays.pdf', title: 'The History and Folklore of Holidays in Nova Scotia' },
  { href: '/brochures/StJohn.pdf', title: 'The History of St. John the Evangelist Anglican Church' },
  { href: '/brochures/Stagecoach.pdf', title: 'The History of Stagecoach Travel in Nova Scotia' },
  { href: '/brochures/Cooper.pdf', title: 'The Life & Tools of a Cooper' },
  { href: '/brochures/Maroon.pdf', title: 'The Maroon Hill Education Story' },
  { href: '/brochures/Blacksmith.pdf', title: 'The Old Blacksmith Shop' },
  { href: '/brochures/Smithy.pdf', title: 'The Old Fashioned Smithy' },
  { href: '/brochures/Wheelwright.pdf', title: 'The Wheelwright Craft' },
  { href: '/brochures/Travelling.pdf', title: 'Travelling in the Early Days' },
  { href: '/brochures/Two.pdf', title: 'Two Good Men: The Lives of Harry R. Hamilton & Burdett Lively' },
  { href: '/brochures/Useful.pdf', title: "Useful Objects From The Late 1800's" },
  { href: '/brochures/Christmas.pdf', title: 'Victorian Christmas Traditions' },
  { href: '/brochures/Village.pdf', title: 'Village Carpentry' },
  { href: '/brochures/Weather.pdf', title: 'Weather Lore for All Seasons' },
  { href: '/brochures/Whatnot.pdf', title: 'Whatnots? to Chamber Pots: Everyday Life in the Mid-19th Century' }
];


const Brochures = () => (
  <Layout>
    <div id="content">
      <div id="left">
        <ul id="nav">
          <li><a className="sackville" href="/History">Sackville: A Brief History</a></li>
          <li><a className="about" href="/About">About the Museum</a></li>
          <li><a className="events" href="/Events">Upcoming Events</a></li>
          <li><a className="links" href="/Community">Community Links</a></li>
          <li><a className="brochures current" href="/Brochures">Historical Brochures</a></li>
        </ul>
      </div>

      <div id="right">
        <h1>Historical Brochures</h1>
        <table>
          <tbody>
            {brochures.map((item, index) => (
              <tr key={index}>
                <td><a href={item.href}>{item.title}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="clear"></div>
    </div>
  </Layout>
);

export default Brochures;
