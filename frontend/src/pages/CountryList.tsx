
import CountryCard from '../components/CountryCard';
import { Country } from '../types/country';

interface CountryListProps {
  countries: Country[];
}

const CountryList = ({countries}: CountryListProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Countries of the World</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country: Country) => (
            <CountryCard key={country.countryCode} country={country} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryList;