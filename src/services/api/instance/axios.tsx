import axios from 'axios';

export const endpoint = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
});