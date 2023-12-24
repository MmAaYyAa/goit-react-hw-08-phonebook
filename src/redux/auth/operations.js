import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  // Utility to remove JWT
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

  
//   POST @ /users/signup
//  body: { name, email, password } - credentials
  export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        console.log(credentials)
        try {
            const res = await axios.post('/users/signup', credentials);
            //if success - add token
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
  )

//   POST @ /users/login
//  body: { email, password }
export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
          const res = await axios.post('/users/login', credentials);
          //if success - add token
          setAuthHeader(res.data.token);
          return res.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
      }
)

