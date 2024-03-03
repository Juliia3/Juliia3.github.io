import "./header.scss";
import logo from "../../assets/images/logo.svg";
import logoMob from "../../assets/images/logoMob.svg";
import menu from "../../assets/images/menu.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideOrShow, setHideOrShow] = useState({});

  const handleManu = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      setHideOrShow(() => {
        return {};
      });
    } else {
      setHideOrShow(() => {
        return { display: "flex" };
      });
    }
  };
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__mobile">
          <Link to="/">
            <img className="header__logo" src={logo} />
            <img className="header__logo-mob" src={logoMob} />
          </Link>
          {isOpen ? (
            <button className="close" onClick={handleManu}>
              X
            </button>
          ) : (
            <button onClick={handleManu} className="header__menu-btn">
              <img className="header__btn" src={menu} alt="menu" />
            </button>
          )}
        </div>
        <div className="header__vision" style={hideOrShow}>
          <nav className="header__menu">
            <ul className="header__list">
              <Link to="/" onClick={handleManu}>
                <li className="header__item text home">Home</li>
              </Link>
              <Link to="/games" onClick={handleManu}>
                <li className="header__item text">Games</li>
              </Link>
              <Link to="/about" onClick={handleManu}>
                <li className="header__item text">About Us</li>
              </Link>
              <Link to="/contact" onClick={handleManu}>
                <li className="header__item text">Contact</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
