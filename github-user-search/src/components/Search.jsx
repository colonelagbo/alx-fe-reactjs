// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0); // To track total results
  const [page, setPage] = useState(1); // To track pagination

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData([]);
    setPage(1); // Reset page on new search

    try {
      const data = await fetchAdvancedUserData({ username, location, minRepos });
      setUserData(data.items); // Store the user data
      setTotalResults(data.total_count); // Store total results
    } catch (err) {
      setError("No users found matching your criteria.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      const newPage = page + 1;
      const data = await fetchAdvancedUserData({ username, location, minRepos, page: newPage });
      setUserData(prevData => [...prevData, ...data.items]); // Append new users to the existing list
      setPage(newPage); // Increment page number
    } catch (err) {
      setError("No more users to display.");
    }
  };

  return (
    <div className="search-container p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Min number of repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="input w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="btn w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* Render search results */}
      <div className="results-container space-y-4 mt-4">
        {userData.length > 0 && userData.map((user) => (
          <div key={user.id} className="user-card p-4 border rounded shadow">
            <img src={user.avatar_url} alt={user.login} className="avatar w-16 h-16 rounded-full" />
            <h2 className="text-xl font-semibold">{user.login}</h2>
            <p>Location: {user.location || 'N/A'}</p>
            <p>Repositories: {user.public_repos || 'N/A'}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Profile
            </a>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {userData.length > 0 && userData.length < totalResults && (
        <button onClick={handleLoadMore} className="btn w-full bg-gray-500 text-white py-2 rounded mt-4">
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
