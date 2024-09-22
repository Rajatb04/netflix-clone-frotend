import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getMovies = async () => {
  const response = await api.get('/movies');
  return response.data;
};

export const getFavourites = async () => {
  const response = await api.get('/user/favourites', {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
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
