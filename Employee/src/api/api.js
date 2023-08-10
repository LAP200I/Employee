
import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        withCredentials: true
    }


});

axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    return config;
})


export const api = async (method, url, data) => {
    try {
        const response = await axiosClient({
            method,
            url,
            data
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

