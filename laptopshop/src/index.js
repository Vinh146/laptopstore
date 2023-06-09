import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Cookies from 'js-cookie';
import axios from 'axios';

axios.interceptors.request.use(function (config) {
    const token = Cookies.get("jwt");
    if(!token) 
        return config;
    config.headers.Authorization =  `Bearer ${token}`;

    return config;
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);