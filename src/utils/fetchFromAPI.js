// Importing axios library for making HTTP requests
import axios from 'axios';

// Defining the base URL for the YouTube API
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// Setting default options for requests including parameters and headers
const options = {
  params: {
    maxResults: 50, // Maximum number of results to be fetched
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, // API key for authentication
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com', // Host for the RapidAPI service
  },
};

// Function for fetching data from the API asynchronously
export const fetchFromAPI = async (url) => {
  // Sending a GET request to the specified URL with the predefined options
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  // Returning the fetched data
  return data;
};
