// src/lib/axios.ts
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;
// console.log(`BASE_URL`, BASE_URL);
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    // timeout: 10000,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});

// Request interceptor (e.g., add auth token)
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("authToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// Response interceptor (e.g., handle errors)
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Global error handling logic
        return Promise.reject(error);
    },
);

export { axiosInstance };
