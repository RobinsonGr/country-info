import { useEffect, useState } from "react";
import { fetchCountries } from "./api/countryApi";
import CountryList from "./pages/CountryList";
import { Country } from "./types/country";
import CountryPage from "./pages/CountryPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

const [countries, setCountries] = useState<Country[]>([])

 useEffect( () => {
 
   const fetchDataCountries = async () => {
    const fetchedCountries = await fetchCountries()
    setCountries(fetchedCountries)
  }

  fetchDataCountries()

 } ,[])

 return (
  <Router>
    <div className="bg-gray-100 min-h-screen">
      <Routes>
        <Route path="/" element={<CountryList countries={countries} />} />
        <Route path="/country/:countryCode" element={<CountryPage />} />
      </Routes>
    </div>
  </Router>
);
}

export default App;