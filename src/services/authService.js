import api from './api';

const apiUrl = process.env.REACT_APP_API_URL;

export const signIn = async (credentials) => {
  try {
    const response = await api.post('/auth/SignIn', credentials);

    if (response.data.token) {
      localStorage.setItem('token', response.data.token); // Stocker le token
    }

    return response.data;
  } catch (error) {
    throw new Error(
        error.response?.data?.message || 'Email ou mot de passe incorrect'
    );
  }
};




// src/services/authService.js
export const signup = async (userData) => {
  try {
    const response = await fetch(`${apiUrl}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Signup failed');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};


export const signUp = async (userData) => {
  const response = await api.post('/auth/SignUp', userData);
  return response.data;
};

export const signOut = () => {
  localStorage.removeItem('token');
};

export const getCurrentUser = async () => {
  const response = await api.get('/auth/me');
  return response.data;
};