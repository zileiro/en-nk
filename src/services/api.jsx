import axios from 'axios';

export const key = "86ab475df55b6509506cb4b27ce9c8cab9861066";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;
