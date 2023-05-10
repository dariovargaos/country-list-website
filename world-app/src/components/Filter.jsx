import { useState } from "react";

export default function Filter({ data }) {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const filterCountriesByRegion = (region) => {
    setSelectedRegion(region);
    if (region === "") {
      setFilteredCountries(countries);
    }
    {
      const filtered = countries.filter((country) =>
        country.region.toLowerCase().includes(region.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  };

  return (
    <div>
      <label>
        <span>Filter by region:</span>
        <select
          value={selectedRegion}
          onChange={(e) => filterCountriesByRegion(e.target.value)}
        >
          <option value="">Filter by region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="antarctic">Antarctic</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </label>

      {filteredCountries.map((country) => (
        <div key={country.alpha3Code}>
          <h2>{country.name}</h2>
          <p>Region: {country.region}</p>
        </div>
      ))}
    </div>
  );
}
