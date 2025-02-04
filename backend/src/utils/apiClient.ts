import axios from 'axios';

export const get = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
};