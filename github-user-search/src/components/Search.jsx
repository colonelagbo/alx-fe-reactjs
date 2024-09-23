const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData([]);
  
    try {
      const data = await fetchAdvancedUserData({ username, location, minRepos });
      setUserData(data.items); // data.items contains the array of users
      setTotalResults(data.total_count); // total_count gives the total results
    } catch (err) {
      setError("No users found matching your criteria.");
    } finally {
      setLoading(false);
    }
  };
  