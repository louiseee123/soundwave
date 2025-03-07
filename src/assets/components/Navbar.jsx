import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-brand" href="#">🎵 Soundwave</a>
        
        <div className="search-bar">
          <input type="text" placeholder="Search for music..." className="search-input" />
          <button className="search-button">🔍</button>
        </div>
        
        <div className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Trending</a>
          <a href="#" className="nav-link">Library</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
