import React from "react";
import "./Library.css"; // Ensure this CSS file exists

const Library = () => {
  const likedSongs = [
    { id: "1", title: "Shape of You", artist: "Ed Sheeran", duration: "3:53" },
    { id: "2", title: "Uptown Funk", artist: "Bruno Mars", duration: "4:30" },
    { id: "3", title: "Happier", artist: "Marshmello", duration: "3:34" },
  ];

  const recentSongs = [
    { id: "1", title: "Senorita", artist: "Shawn Mendes", duration: "3:11" },
    { id: "2", title: "Heat Waves", artist: "Glass Animals", duration: "3:59" },
    { id: "3", title: "Stay", artist: "The Kid LAROI", duration: "2:39" },
  ];

  const recommended = [
    { id: "1", title: "Industry Baby", artist: "Lil Nas X", duration: "3:32" },
    { id: "2", title: "Bad Habits", artist: "Ed Sheeran", duration: "3:50" },
  ];

  const playlists = [
    { id: "1", name: "Chill Vibes" },
    { id: "2", name: "Workout Pump" },
    { id: "3", name: "Throwback Hits" },
  ];

  return (
    <div className="library-container">
      <h2 className="library-title">Your Library</h2>

      {/* Side-by-side Containers */}
      <div className="library-grid">
        <div className="library-section">
          <h3>Liked Songs</h3>
          {likedSongs.map((song) => (
            <div key={song.id} className="library-item">
              <div className="song-info">
                <h3 className="song-title">{song.title}</h3>
                <p className="song-artist">{song.artist}</p>
              </div>
              <span className="song-duration">{song.duration}</span>
            </div>
          ))}
        </div>

        <div className="library-section">
          <h3>Recently Played</h3>
          {recentSongs.map((song) => (
            <div key={song.id} className="library-item">
              <div className="song-info">
                <h3 className="song-title">{song.title}</h3>
                <p className="song-artist">{song.artist}</p>
              </div>
              <span className="song-duration">{song.duration}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Sections */}
      <div className="library-bottom">
        <div className="library-section">
          <h3>Recommended for You</h3>
          {recommended.map((song) => (
            <div key={song.id} className="library-item">
              <div className="song-info">
                <h3 className="song-title">{song.title}</h3>
                <p className="song-artist">{song.artist}</p>
              </div>
              <span className="song-duration">{song.duration}</span>
            </div>
          ))}
        </div>

        <div className="library-section">
          <h3>Your Playlists</h3>
          {playlists.map((playlist) => (
            <div key={playlist.id} className="playlist-item">
              <p>{playlist.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
