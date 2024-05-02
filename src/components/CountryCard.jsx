import { useState } from 'react';
import { useEffect } from 'react';


function CountryCard({country}) {

  const [imageURL, setImageURL] = useState();
  useEffect(()=>{fetch(`https://pixabay.com/api/?key=43674915-144e1bd910101591a29af5158&q=${country.capital}&image_type=photo`)
  .then(response => response.json())
  .then(data => setImageURL(data.hits[0].webformatURL))},[country])

  return(
    <div className='w-72 h-52'>
      <img className="w-full h-full" src={imageURL} alt={country.capital + " image"} />
      <h1>{country.name}</h1>
      <h2>{country.continent.name}</h2>     
    </div>
  )
}
export default CountryCard;