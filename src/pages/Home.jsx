import { useEffect } from "react";
import { useQuery, gql } from '@apollo/client';
import { useState } from "react";
import CountryCard from "../components/CountryCard";


function Home(){

  const [countryFilter, setCountryFilter] = useState("")
  const [countries, setCountries] = useState([])
  const [filteredState, setFilteredState] = useState([])
  const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      continent{name}
      capital
      languages{name}
      currency
      states{name}
    }
  }
  `;
  const {loading, error, data} = useQuery(GET_COUNTRIES);

  useEffect(() => {if(data){setCountries(data.countries); setFilteredState(countries)}},[data, countries])

  useEffect(()=>{
    if(countryFilter !== ""){
      const res = countries.filter((item) => {
        if(item.name.toLocaleLowerCase().startsWith(countryFilter.toLocaleLowerCase())){
          return item.name.toLowerCase().startsWith(countryFilter.toLowerCase())
        }
      })
      setFilteredState(res);
    }
  },[countryFilter])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <input className="capitalize" type="search" onChange={(e) => {setCountryFilter(e.target.value)}} />
      <section className="flex flex-row gap-4">
        {filteredState.map((country) => (
          <CountryCard key={country.code} country={country}/>
        ))}
      </section>
    </>
  )
}
export default Home