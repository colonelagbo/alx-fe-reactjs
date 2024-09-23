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
      setError(null);  // Clear previous error
      setUserData(null);  // Clear previous user data

      try {
        const data = await fetchUserData(username);
        setUserData(data);
      } catch (err) {
        // Set error message when user is not found or an error occurs
        setError("Looks like we can't find the user.");
      } finally {
        setLoading(false);  // Set loading to false after the API call is done
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

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}  {/* Display error message */}
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
