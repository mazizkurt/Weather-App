import {API_URL, API_TOKEN} from '@env';
import axios from 'axios';
import i18n from 'i18next';
export const getGeocoding = (e: string) => {
  return axios.get(
    `${API_URL}/geo/1.0/direct?q=${e}&limit=10&appid=${API_TOKEN}`,
  );
};
export const getCurrentWeather = (lat: string, lon: string) => {
  return axios.get(
    `${API_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_TOKEN}&lang=${i18n.language}&units=metric`,
  );
};
