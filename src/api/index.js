import axios from 'axios';

// Buat instance axios tanpa header Authorization
const Api = axios.create({
    baseURL: 'https://gt-guard-dev.garudatekno.com'
});

// Menambahkan interceptor untuk menetapkan header Authorization
Api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default Api;