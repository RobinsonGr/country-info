import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import CountryCard from '../components/CountryCard';
import PopulationChart from '../components/PopulationChart';
import { fetchCountryDetails } from '../api/countryApi';
import { FullCountryData } from '../types/country';


const CountryPage: React.FC = () => {

    const { countryCode } = useParams<{ countryCode: string }>();
    const [country, setCountry] = useState<FullCountryData | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
      const fetchData = async () => {
        if (!countryCode) {
          navigate("/not-found"); 
          return;
        }
        try {
          const data = await fetchCountryDetails(countryCode);
          if (data) {
            setCountry(data);
          }
        } catch (error) {
          console.error("Failed to fetch country data:", error);
          navigate("/");
      };
    }
  
      fetchData();
    }, [countryCode, navigate]);

    if (!country) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-2xl font-semibold text-blue-600">Loading...</div>
        </div>
      );
    }
  
    return (
    
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8"
          >
            
            <span>Back to Countries</span>
          </Link>
    
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                <img
                  src={country?.flag}
                  alt={`Flag of ${country.name}`}
                  className="w-full md:w-96 h-48 object-cover rounded-lg shadow-md"
                />
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mt-4 md:mt-0">{country.name}</h1>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Country Code</p>
                      <p className="font-medium">{country.countryCode}</p>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Population Over Time</h2>
                <PopulationChart data={country.populationCounts} /> 
              </div>
    
              {country.borders && country.borders.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Border Countries</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {country.borders.map((borderCountry, index) => (
                    <CountryCard key={index} country={borderCountry} />
                  ))}
                </div>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    )
};

export default CountryPage;