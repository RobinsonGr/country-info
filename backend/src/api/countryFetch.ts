import { get } from "../utils/apiClient";

const BASE_URL = 'https://date.nager.at/api/v3';
const API_V1 = 'https://countriesnow.space/api/v0.1';

export const fetchCountries = async () => {
  const response = await get(`${BASE_URL}/AvailableCountries`);
  return response.data;
};

export const fetchCountriesPopulation = async () => {
    const response = await get(`${API_V1}/countries/population/`);
    return response.data;
  };
  

export const fetchCountryInfo = async (countryCode: string) => {
  const response = await get(`${BASE_URL}/CountryInfo/${countryCode}`);
  return response.data;
};

export const fetchCountriesFlags = async () => {
    const response = await get(`${API_V1}/countries/flag/images`);
    return response.data;
};