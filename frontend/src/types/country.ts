export interface Country {
    countryCode: string;
    name: string;
    commonName?: string;
  }

  export interface PopulationData {
    year: number;
    value: number;
  }
  
  //for all properties that it has by default, it's only required this
  export interface CountryBorder {
    countryCode: string;
  }

  export interface CountryDetails {
    name: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: CountryBorder[];
  }
  
  export interface FullCountryData extends CountryDetails {
    flag: string;
    populationCounts: { year: number; value: number }[];
  }