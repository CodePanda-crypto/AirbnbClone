import './header.css';
function Header() {
  return (
    <header className="App-header">
      <nav>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/react.svg"
            className="App-logo react logo-spin"
            alt="React logo"
          />
        </a>
      </nav>
      <h1>ReactFacts</h1>
    </header>
  );
}
export default Header;
