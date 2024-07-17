import './header.css';
import AirbnbLogo from '/airbnb.svg';

function Header() {
  return (
    <header className="App-header">
      <nav className="navbar">
        <div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={AirbnbLogo}
              className="App-logo react logo-spin"
              alt="React logo"
            />
          </a>
        </div>
        {/* <div>
          <ul className="nav-links">
            <li className="nav-link">
              <a href="#">Pricing</a>
            </li>
            <li className="nav-link">
              <a href="#">About</a>
            </li>
            <li className="nav-link">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div> */}
      </nav>
    </header>
  );
}
export default Header;
