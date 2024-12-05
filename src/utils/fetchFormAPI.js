import axios from 'axios';

// Load the API key from the environment variable
const API_KEY = process.env.REACT_APP_RAPID_API_KEY;
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// Set default options for the API call
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

// The function to fetch data from the API
export const fetchFromAPI = async (url, params = {}) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, {
      ...options,
      params: { ...params, maxResults: '50' } // Adding default params like maxResults
    });

    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    return null; // Optionally return null or an empty object if error occurs
  }
};