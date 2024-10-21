import { useState } from 'react';
import './Country.css';

const Country = ({country,handleVisitedCountriesBTn,handleVisitedFlags}) => {
    const {name, flags,capital,region} = country;
    const [Visited,setVisited]=useState(false)
    const btnHandle=()=>{
        setVisited(!Visited)
    }
    return (
        <div className={`country ${Visited && "visited"}`}>
            <img src={flags?.png} alt="" />
            <h1> {name?.common}</h1>
            <p>Official : {name?.official}</p>
            <p>Capital : {capital}</p>
            <p>Region : {region}</p>
            <button onClick={() => {handleVisitedCountriesBTn(country) ,handleVisitedFlags(flags.png)}
                
            }>Mark Visited</button>
            <button onClick={btnHandle}>{Visited? "Visited": "Going"}</button>
        </div>
    );
};

export default Country;