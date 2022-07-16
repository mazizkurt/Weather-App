import {API_URL, API_TOKEN} from '@env';
import axios from 'axios';
export const getGeocoding = (e: string) => {
  return axios.get(
    `${API_URL}/geo/1.0/direct?q=${e}&limit=10&appid=${API_TOKEN}`,
  );
};
