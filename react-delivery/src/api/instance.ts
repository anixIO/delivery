import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://shift-backend.onrender.com',
  headers: {
    'Content-Type': 'application/json'
  }
});
