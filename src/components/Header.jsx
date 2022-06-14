import "../styles/Header.css";
import logo from "../assets/epic-mask.png";

const Header = ({activePage, setActivePage}) => {


  const handleClick = (page) => {
    setActivePage(page);
  }

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
        <a href="" className={activePage == 'home' ? 'active' : undefined} onClick={handleClick}>Home</a>
        <a href="" className={activePage == 'roadmap' ? 'active' : undefined} onClick={handleClick}>Roadmap</a>
        <a href="" className={activePage == 'whitepaper' ? 'active' : undefined} onClick={handleClick}>Whitepaper</a>
        <a href="" className={activePage == 'team' ? 'active' : undefined} onClick={handleClick}>Team</a>
      </nav>
    </div>
  );
}

export default Header;