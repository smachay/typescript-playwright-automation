import axios from 'axios';
import { HttpMethod } from './types';
import { apiBaseURL as baseURL } from '../config';

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const makeRequest = async (
  method: HttpMethod,
  endpoint: string,
  data?: any,
  headers?: any
) => {
  try {
    const response = await apiClient.request({
      method,
      url: endpoint,
      data,
      headers,
    });
    return response;
  } catch (error) {
    console.error(`API Request failed: ${method} ${endpoint}`, error);
    throw error;
  }
};
