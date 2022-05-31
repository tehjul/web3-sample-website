import "../styles/Header.css";
import logo from "../assets/epic-mask.png";

const Header = () => {
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
        <a href="https://tehjul.com/">Home</a>
        <a href="https://tehjul.com/">Roadmap</a>
        <a href="https://tehjul.com/">Whitepaper</a>
        <a href="https://tehjul.com/">Team</a>
      </nav>
    </div>
  );
}

export default Header;