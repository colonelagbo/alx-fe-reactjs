// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  const query = [];

  // Construct query parameters based on inputs
  if (username) query.push(`user:${username}`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  const queryString = query.join('+');
  const response = await axios.get(`${BASE_URL}?q=${queryString}`);
  
  return response.data; // Return the API data
};
