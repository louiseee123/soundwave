import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./assets/components/Navbar";
import Library from "./assets/components/Library"; 

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <header className="hero-section">
          <h1 className="app-title">Welcome to Soundwave</h1>
          <p className="subtitle">Your favorite music, anytime, anywhere</p>
        </header>

        <section className="trending">
          <h2>Trending Now</h2>
          <div className="trending-tracks">
            <p>🎵 "Flowers" - Miley Cyrus</p>
            <p>🎵 "Blinding Lights" - The Weeknd</p>
            <p>🎵 "As It Was" - Harry Styles</p>
          </div>
        </section>

        <section className="featured-artists">
          <h2>Featured Artists</h2>
          <div className="artist-list">
            <p>🎤 Taylor Swift</p>
            <p>🎤 Ed Sheeran</p>
            <p>🎤 BTS</p>
          </div>
        </section>

        <section className="user-playlist">
          <h2>Your Playlist</h2>
          <ul>
            <li>🎵 "Anti-Hero" - Taylor Swift</li>
            <li>🎵 "Dance Monkey" - Tones and I</li>
            <li>🎵 "Peaches" - Justin Bieber</li>
          </ul>
        </section>

        <section className="music-player">
          <h2>Now Playing</h2>
          <p>"Save Your Tears" - The Weeknd</p>
          <div className="player-controls">
            <button>⏮️ Prev</button>
            <button>▶️ Play/Pause</button>
            <button>⏭️ Next</button>
          </div>
        </section>

        {/* ✅ Add Library Section Here */}
        <Library />
      </div>
    </div>
  );
}

export default App;
