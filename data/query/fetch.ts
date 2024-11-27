import axios from 'axios';

const fetch = axios.create({
  baseURL: '/api',
});

const axiosfetch = ({ ...options }) => {
  return fetch(options)
    .then((data) => data)
    .then((err) => err);
};

export default axiosfetch;
