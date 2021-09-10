import './App.scss';
import React, { useEffect, useState } from "react";
import Weather from './components/Weather';
import SearchIcon from '@material-ui/icons/Search';
export default function App() {
  
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [weather, setWeather] = useState([]);
  const [inputCity, setInputCity] = useState('');
  const [city, setCity] = useState();
  const [countryCode, setCountryCode] = useState();
  const [foundCity, setFoundCity] = useState(false);
  const [tooManyRequests] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(function(){ 
      var t = new Date();
      setTime(t); 
    }, 1000);
  }, [])

  useEffect(() => {
    
    const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });


        if(city === undefined || countryCode === undefined) {
          if(lat === undefined || long === undefined) {
            setCountryCode("GPD");
            setCity("London");
            return;
          }else {
            await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`)
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
                setWeather(data);
                setCity(data.name);
                setCountryCode(data.sys.country);
                setFoundCity(true);
              }).catch((error) => {
                console.log(error)
              });
            return;
          }
        }else {
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
      }

      
    fetchData();
  }, [lat,long, city, countryCode])

  const changeCity = async (e) => {
    e.preventDefault();

    if(inputCity === undefined) {
      return;
    }else {
      setCity(inputCity);
      setInputCity('');
    }
  }

  return (
    
    <div className="main-content">
      <p className="clock">{time.toLocaleTimeString()}</p>
      <div className="content">
        <div className="search-field" id="search">
          <form onSubmit={changeCity}>
            <input 
              className="search-input"
              placeholder="City" 
              onChange={e => {setInputCity(e.target.value)}} 
              value={inputCity}
            />
            <SearchIcon onClick={changeCity} className="icon" />
          </form>
        </div>
        {(typeof weather.main != 'undefined') ? (
          <>
            {foundCity ? <><Weather weatherData={weather}/></> : <><p>Can't find city</p></>}
          </>
        ): (
          <div className="textAlignCenter">
            {tooManyRequests ? 
            <>
              <p>Too many requests</p>
            </> 
            :
            <p>Loading...</p>}
          </div>
        )}
      </div>
      <div className="made-by">
          <p>Created with <ion-icon name="heart"></ion-icon> by <a href="https://github.com/NotLimey/">Limey</a></p>
      </div>
    </div>
  );
}