import { Country } from "../types/country";
import { Link } from "react-router-dom";
import { getIso3FromIso2 } from "../util/countryCodes";

interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {

  const countryName = country.name || country.commonName;
  const countryIso3 = getIso3FromIso2(country.countryCode)?.toLocaleLowerCase()

  return (
    <Link to={`/country/${countryIso3}`} 
    className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
    >
      <div className="flex items-center space-x-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{countryName}</h3>
          <p className="text-sm text-gray-500">Code: {country.countryCode}</p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
