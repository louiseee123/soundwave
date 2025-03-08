import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [nowPlaying, setNowPlaying] = useState({
    title: "Save Your Tears",
    artist: "The Weeknd",
    cover: "https://via.placeholder.com/150",
    duration: 200, // in seconds
    progress: 50, // in seconds
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [volume, setVolume] = useState(50);
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [playlists, setPlaylists] = useState([
    { id: 1, name: "Chill Vibes", tracks: 12 },
    { id: 2, name: "Workout Beats", tracks: 8 },
    { id: 3, name: "Road Trip Mix", tracks: 15 },
  ]);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New release: 'Flowers' by Miley Cyrus", read: false },
    { id: 2, message: "Your playlist 'Chill Vibes' has been updated", read: false },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Mock data for featured tracks
  const featuredTracks = [
    { id: 1, title: "Flowers", artist: "Miley Cyrus", cover: "https://via.placeholder.com/150", duration: 180 },
    { id: 2, title: "Blinding Lights", artist: "The Weeknd", cover: "https://via.placeholder.com/150", duration: 200 },
    { id: 3, title: "As It Was", artist: "Harry Styles", cover: "https://via.placeholder.com/150", duration: 190 },
  ];

  // Function to handle play/pause
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Function to handle next track
  const handleNextTrack = () => {
    setNowPlaying({
      title: "Blinding Lights",
      artist: "The Weeknd",
      cover: "https://via.placeholder.com/150",
      duration: 200,
      progress: 0,
    });
  };

  // Function to handle previous track
  const handlePrevTrack = () => {
    setNowPlaying({
      title: "Starboy",
      artist: "The Weeknd",
      cover: "https://via.placeholder.com/150",
      duration: 220,
      progress: 0,
    });
  };

  // Function to toggle shuffle
  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  // Function to toggle repeat
  const toggleRepeat = () => {
    setIsRepeat(!isRepeat);
  };

  // Function to handle volume change
  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  // Function to handle progress change
  const handleProgressChange = (e) => {
    setNowPlaying({ ...nowPlaying, progress: e.target.value });
  };

  // Function to handle login
  const handleLogin = (username, password) => {
    setUser({ username, email: `${username}@example.com` });
  };

  // Function to handle signup
  const handleSignup = (username, email, password) => {
    setUser({ username, email });
  };

  // Function to handle logout
  const handleLogout = () => {
    setUser(null);
  };

  // Function to mark notification as read
  const markNotificationAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Function to create a new playlist
  const createPlaylist = (name) => {
    const newPlaylist = {
      id: playlists.length + 1,
      name,
      tracks: 0,
    };
    setPlaylists([...playlists, newPlaylist]);
  };

  // Function to delete a playlist
  const deletePlaylist = (id) => {
    setPlaylists(playlists.filter((playlist) => playlist.id !== id));
  };

  // Function to handle search
  const handleSearch = (query) => {
    const results = featuredTracks.filter(
      (track) =>
        track.title.toLowerCase().includes(query.toLowerCase()) ||
        track.artist.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Effect for dark mode
  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>Soundwave</h1>
        </div>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search for music..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              handleSearch(e.target.value);
            }}
          />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="navbar-dark-mode">
          <button onClick={toggleDarkMode}>
            {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Hero Section */}
        <header className="hero-section">
          <h1>Welcome to Soundwave</h1>
          <p>Your favorite music, anytime, anywhere</p>
        </header>

        {/* Featured Tracks */}
        <section className="featured-tracks">
          <h2>Featured Tracks</h2>
          <div className="track-list">
            {featuredTracks.map((track) => (
              <div key={track.id} className="track-card">
                <img src={track.cover} alt={track.title} />
                <h3>{track.title}</h3>
                <p>{track.artist}</p>
                <button onClick={() => setNowPlaying(track)}>Play</button>
              </div>
            ))}
          </div>
        </section>

        {/* Library Section */}
        <section className="library">
          <h2>Your Library</h2>
          <div className="playlist-list">
            {playlists.map((playlist) => (
              <div key={playlist.id} className="playlist-card">
                <h3>{playlist.name}</h3>
                <p>{playlist.tracks} tracks</p>
                <button onClick={() => deletePlaylist(playlist.id)}>Delete</button>
              </div>
            ))}
          </div>
          <div className="create-playlist">
            <input type="text" placeholder="New playlist name" id="playlistName" />
            <button onClick={() => createPlaylist(document.getElementById('playlistName').value)}>
              Create Playlist
            </button>
          </div>
        </section>

        {/* Music Player */}
        <section className="music-player">
          <div className="now-playing">
            <img src={nowPlaying.cover} alt={nowPlaying.title} />
            <div>
              <h3>{nowPlaying.title}</h3>
              <p>{nowPlaying.artist}</p>
            </div>
          </div>
          <div className="player-controls">
            <button onClick={handlePrevTrack}>⏮️</button>
            <button onClick={handlePlayPause}>
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <button onClick={handleNextTrack}>⏭️</button>
          </div>
          <div className="progress-bar">
            <input
              type="range"
              min="0"
              max={nowPlaying.duration}
              value={nowPlaying.progress}
              onChange={handleProgressChange}
            />
          </div>
          <div className="volume-control">
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
          <div className="shuffle-repeat">
            <button onClick={toggleShuffle}>
              {isShuffle ? '🔀' : '🔀'}
            </button>
            <button onClick={toggleRepeat}>
              {isRepeat ? '🔁' : '🔁'}
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2023 Soundwave. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;