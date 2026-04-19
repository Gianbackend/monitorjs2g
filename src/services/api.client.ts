import axios from 'axios';

// Configuración base para Axios
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para manejar errores o tokens de SAP/Auth
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error en la petición:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;