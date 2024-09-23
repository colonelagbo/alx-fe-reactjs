// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username) {
      setLoading(true);
      setError(null);  // Reset previous error
      setUserData(null);  // Clear previous user data

      try {
        const data = await fetchUserData(username);
        setUserData(data);  // Set the fetched user data
      } catch (err) {
        // If an error occurs (e.g., user not found), set the error message
        setError("Looks like we can't find the user.");
      } finally {
        setLoading(false);  // Stop the loading indicator
      }
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
        <button type="submit" className="btn">Search</button>
      </form>

      {/* Display loading, error, or user info based on state */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt={userData.login} className="avatar" />
          <h2>{userData.name || 'No Name Available'}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
