import axios from 'axios';
import { ENDPOINT } from '../utils/constants';

// adb reverse tcp:3333 tcp:3333 -> para conseguir consumir o localhost de dentro do android

const api = axios.create({
  baseURL: ENDPOINT
});

export default api;
