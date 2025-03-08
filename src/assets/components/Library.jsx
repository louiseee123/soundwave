import React from 'react';

function Library({ playlists }) {
  return (
    <section className="library">
      <h2>Your Library</h2>
      <div className="playlist-list">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="playlist-card">
            <h3>{playlist.name}</h3>
            <p>{playlist.tracks} tracks</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Library;