import axios from "axios";

const API_KEY = process.env.API_KEY
const BASE_URL = 'https://api.themoviedb.org/3';

export const tmdb = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: 'en-US',
    }
})