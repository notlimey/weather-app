import './App.scss';
import React, { useEffect, useState } from "react";
import Weather from './components/Weather';
import SearchIcon from '@material-ui/icons/Search';
export default function App() {
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weather, setWeather] = useState([]);
  const [inputCity, setInputCity] = useState();
  const [city, setCity] = useState();
  const [countryCode, setCountryCode] = useState();
  const [foundCity, setFoundCity] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      if(city === undefined || countryCode === undefined) {
        setCity("Oslo");
        setCountryCode("NO");
        setFoundCity(true);
        return;
      }

      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
      .then((response => {
        if(response.ok) {
            setFoundCity(true);
            return response.json()
        }
        if(response.status === 404) {
          setFoundCity(false);
        }
        throw response;
      }))
      .then(data => {
        setWeather(data)
      }).catch((error) => {
        console.log(error)
      });
    }
    fetchData();
  }, [lat,long, city, countryCode])

  const changeCity = async () => {
    if(inputCity === undefined) {
      return;
    }else {
      setCity(inputCity);
    }
  }

  return (
    <div className="main-content">
      <div className="content">
        {(typeof weather.main != 'undefined') ? (
          <>
            <div className="search-field">
              <div>
                <input className="search-input" placeholder="City" onChange={e => setInputCity(e.target.value)} />
                <SearchIcon onClick={changeCity} className="icon" />
              </div>
            </div>
            {foundCity ? <><Weather weatherData={weather}/></> : <><p>Can't find city</p></>}
          </>
        ): (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}