import { useEffect, useState } from 'react';
import Country from '../Component/country';
import './Countries.css';
const Countries = () => {
    const [countries, setCountries] = useState([])
    const [vistedCountries, setVisitedCountries] = useState([])

    const handleVisitedCountriesBTn=country=>{
        const newVisitedCountries= [...vistedCountries, country]
        setVisitedCountries(newVisitedCountries)
        
    }

    const [visitedFlags, setVisitedFlags] =useState([])

    const handleVisitedFlags=(flag)=>{
        const newVisitedFlags =[...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }

    useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data =>{setCountries(data);})
    },[])
    return (
       <div>
        <h1>React World Tour</h1>
        <div>
            <h3>Visited Countries: {vistedCountries.length} </h3>
            <ol>
            {
                        vistedCountries.map(country => (
                            <li key={country.cca3}>{country.name.common}</li>
                        ))
                    }
            </ol>
        </div>
        <div className="flag-container">
                    {
                        visitedFlags.map((flag,idx)=> <img key={idx} src={flag}></img>)
                    }
        </div>




         <div className='container-countries '>
            {
      countries.map(country=> <Country 
        country={country} key={country.cca3}
        handleVisitedCountriesBTn={handleVisitedCountriesBTn}
        handleVisitedFlags={handleVisitedFlags}
        >
        </Country>)
      }
        </div>
       </div>
    );
};

export default Countries;