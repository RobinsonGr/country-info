import { FullCountryData } from "../types/country";

const API_BASE_URL = "http://localhost:3000/api/countries";

export const fetchCountries = async () => {
  const response = await fetch(`${API_BASE_URL}/`);
  if (!response.ok) throw new Error("Failed to fetch countries");
  return response.json();
};

export const fetchCountry = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/${id}`);
  if (!response.ok) throw new Error("Failed to fetch country data");
  return response.json();
};

export const fetchPopulation = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/population/${id}`);
  if (!response.ok) throw new Error("Failed to fetch population data");
  return response.json();
};

export const fetchFlag = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/img/${id}`);
  if (!response.ok) throw new Error("Failed to fetch flag");

  return response.json();
};

export const fetchCountryDetails = async (id: string): Promise<FullCountryData> => {
  
  const countryId = id.toLowerCase()
  try {
    const [country, population, flagData] = await Promise.all([
      fetchCountry(countryId),
      fetchPopulation(countryId),
      fetchFlag(countryId)
    ]);

    
    return {
      name: country.commonName,
      ...country,
      flag: flagData.flag || [],
      populationCounts: population.populationCounts || [],
    };
  } catch (error) {
    console.error("Error fetching country details:", error)
    throw new Error("Failed to fetch country details");
  }
};
