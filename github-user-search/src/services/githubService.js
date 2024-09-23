// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  const query = [];

  // Construct the search query parameters
  if (username) query.push(`user:${username}`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  const queryString = query.join('+');
  const url = `${BASE_URL}?q=${queryString}`; // This is where the endpoint is used

  // Log the constructed URL for debugging
  console.log("Fetching data from:", url);

  const response = await axios.get(url);
  return response.data; // Return the API data
};
