
import Cookie from 'js-cookie';
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
});

if (Cookie.get('token')) {
    api.defaults.headers['Authorization'] = `Bearer ${Cookie.get('token')}`
}


api.interceptors.request.use(function (config) {
    config.headers.Authorization =  `Bearer ${Cookie.get('token')}`;
    return config;
});

export default api;