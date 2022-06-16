import "../styles/Header.css";
import {capitalizeFirstLetter} from "../utils/textutils";
import logo from "../assets/epic-mask.png";

const Header = ({ activePage, setActivePage }) => {

  const pages = [
    'home',
    'roadmap',
    'whitepaper',
    'team',
  ]

  return (
    <div>
      <div className="header">
        <div className="header_logo">
          <img
            src={logo}
            alt="Epic Mask"
            className="header_logo-image"
          />
        </div>
        <div className="header_nav">
          {pages.map(page => (
            <button key={page} className={`${page === activePage ? 'active' : 'inactive'}`} onClick={() => setActivePage(page)}>
              {capitalizeFirstLetter(page)}
            </button>
          ))}
        </div>
      </div>
      <div className="delimiter"></div>
    </div>
  );
}

export default Header;