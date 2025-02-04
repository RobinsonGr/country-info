import { Request, Response } from 'express';
import { fetchCountries, fetchCountryInfo, fetchCountriesFlags } from '../api/countryFetch';
import { fetchCountriesPopulation } from '../api/countryFetch';

export const getCountries = async (req: Request, res: Response) => {
  try {
    const countries = await fetchCountries();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch  countries' });
  }
};

export const getCountryInfo = async (req: Request, res: Response) => {
  const { countryCode } = req.params;
  try {
    const countryInfo = await fetchCountryInfo(countryCode);
    res.json(countryInfo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch country info' });
  }
};


export const getCountryPopulation = async (req: Request, res: Response): Promise<any> => {
    const { countryCode } = req.params; 

    try {
        const countriesPopulation = await fetchCountriesPopulation();

        
        const countryData = countriesPopulation.data.find(
            (country: {code: string}) => country.code.toLocaleLowerCase() === countryCode
        );

        console.log(countryData)

        if (!countryData) {
            return res.status(404).json({ error: 'Country not found' });
        }

        res.json({
            country: countryData.country,
            code: countryData.code,
            populationCounts: countryData.populationCounts,
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch country population data' });
    }
};


export const getCountryFlag = async (req: Request, res: Response): Promise<any>  => {
    const { countryCode } = req.params;

    try {
        const countriesFlags = await fetchCountriesFlags();

        //I wanted to create a single function to handle both logic from populatio and images, however,  the code key is different here with 'iso2'
        const countryData = countriesFlags.data.find(
            (country: any) => country.iso3.toLowerCase() === countryCode
        );

        console.log(countryCode, countriesFlags.data[0].iso2.toLowerCase())

        if (!countryData) {
            return res.status(404).json({ error: 'Country not found' });
        }

        res.json({
            name: countryData.name,
            code: countryData.iso3,
            flag: countryData.flag,
        });
    } catch (error) {
        console.error('Error fetching country flag data:', error);
        res.status(500).json({ error: 'Failed to fetch country flag data' });
    }
};