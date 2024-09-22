import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const IMDB_API_URL = 'https://imdb-top-100-movies.p.rapidapi.com/';
const API_HEADERS = {
  'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
  'x-rapidapi-key': process.env.NEXT_PUBLIC_IMDB_API_KEY,
};

export const getMovies = async () => {
  const response = await axios.get(IMDB_API_URL, { headers: API_HEADERS });
  return response.data; 
};

export const loginUser = async (data) => {
  const response = await api.post('/auth/login', data);
  return response.data;
};

export const signupUser = async (data) => {
  const response = await api.post('/auth/signup', data);
  return response.data;
};

export const getFavourites = async () => {
  const response = await api.get('/favourites');
  return response.data;
};
