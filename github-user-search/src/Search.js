import React, { useState } from 'react';
import axios from 'axios';

const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    const config = GITHUB_API_KEY 
      ? { headers: { Authorization: `token ${GITHUB_API_KEY}` } } 
      : {};

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`, config);
      setUserData(response.data);
    } catch (error) {
      setError("Error fetching data");
    }
  };

  // rest of your component logic...
};

export default Search;
