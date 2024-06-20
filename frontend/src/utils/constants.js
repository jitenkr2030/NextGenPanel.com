export const API_ENDPOINTS = {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    USERS: '/users',
    PRODUCTS: '/products',
    TICKETS: '/tickets',
  };
  
  export const ACTION_TYPES = {
    SET_USER: 'SET_USER',
    LOGOUT_USER: 'LOGOUT_USER',
    FETCH_DATA: 'FETCH_DATA',
    SET_ERROR: 'SET_ERROR',
  };
  
  export const DEFAULT_VALUES = {
    USER_ROLE: 'user',
    ADMIN_ROLE: 'admin',
    TOKEN_EXPIRY: 3600, // in seconds
  };
  