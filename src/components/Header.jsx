import "../styles/Header.css";
import logo from "../assets/epic-mask.png";

const Header = ({ activePage, setActivePage }) => {

  return (
    <div className="header">
      <div className="header_logo">
        <img
          src={logo}
          alt="Epic Mask"
          className="header_logo-image"
        />
      </div>
      <nav className="header_nav">
        <button className={activePage === 'home' ? 'active' : undefined} onClick={() => setActivePage('home')}>Home</button>
        <button className={activePage === 'roadmap' ? 'active' : undefined} onClick={() => setActivePage('roadmap')}>Roadmap</button>
        <button className={activePage === 'whitepaper' ? 'active' : undefined} onClick={() => setActivePage('whitepaper')}>Whitepaper</button>
        <button className={activePage === 'team' ? 'active' : undefined} onClick={() => setActivePage('team')}>Team</button>
      </nav>
    </div>
  );
}

export default Header;