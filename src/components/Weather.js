import React , { useEffect, useState } from 'react'
import '../scss/info.scss'
import Wind from '../files/wind.svg';
import Mist from '../files/mist.svg';
import Haze from '../files/haze.svg';
import Dust from '../files/dust.svg';
import Dust2 from '../files/dust2.svg';
import Fog from '../files/fog.svg';

var icons = [
    {
        name: "Clouds",
        description: [
            { 
                title: "few clouds",
                iconDay: "<ion-icon name='partly-sunny-outline'></ion-icon>",
                iconNight: "<ion-icon name='partly-sunny-outline'></ion-icon>",
            }, 
            { 
                title: "scattered clouds",
                iconDay: "<ion-icon name='cloud-outline'></ion-icon>"
            }, 
            { 
                title: "broken clouds",
                iconDay: "<ion-icon name='cloud-outline'></ion-icon>",
                iconNight: "<ion-icon name='cloud-outline'></ion-icon>"
            }, 
            { 
                title: "overcast clouds",
                iconDay: "<ion-icon name='cloud-outline'></ion-icon>",
                iconNight: "<ion-icon name='cloud-outline'></ion-icon>"
            }
        ] 
    },
    {
        name: "Clear",
        description: [
            { 
                title: "clear sky",
                iconDay: "<ion-icon name='sunny-outline'></ion-icon>",
                iconNight: "<ion-icon name='moon-outline'></ion-icon>"
            }
        ]
            
    },
    {
        name: "Mist",
        description: [
            { 
                title: "mist",
                iconDay: `<img src=${Mist} alt='' />`,
                iconNight: `<img src=${Mist} alt='' />`,
            }
        ] 
    },
    {
        name: "Smoke",
        description: [
            { 
                title: "Smoke",
                iconDay: `<img src=${Mist} alt='' />`,
                iconNight: `<img src=${Mist} alt='' />`,
            }
        ] 
    },
    {
        name: "Haze",
        description: [
            { 
                title: "Haze",
                iconDay: `<img src=${Haze} alt='' />`,
                iconNight: `<img src=${Haze} alt='' />`,
            }
        ] 
    },
    {
        name: "Dust",
        description: [
            { 
                title: "sand/ dust whirls",
                iconDay: `<img src=${Dust} alt='' />`,
                iconNight: `<img src=${Dust} alt='' />`,
            }
        ] 
    },
    {
        name: "Fog",
        description: [
            { 
                title: "fog",
                iconDay: `<img src=${Fog} alt='' />`,
                iconNight: `<img src=${Fog} alt='' />`,
            }
        ] 
    },
    {
        name: "Dust",
        description: [
            { 
                title: "dust",
                iconDay: `<img src=${Dust} alt='' />`,
                iconNight: `<img src=${Dust} alt='' />`,
            }
        ] 
    },
    {
        name: "Ash",
        description: [
            { 
                title: "volcanic ash",
                iconDay: `<img src=${Dust2} alt='' />`,
                iconNight: `<img src=${Dust2} alt='' />`,
            }
        ] 
    },
    {
        name: "Squall",
        description: [
            { 
                title: "squalls",
                iconDay: "<ion-icon name='cloudy-outline'></ion-icon>",
                iconNight: "<ion-icon name='cloudy-outline'></ion-icon>",
            }
        ] 
    },
    {
        name: "Tornado",
        description: [
            { 
                title: "tornado",
                iconDay: "<ion-icon name='cloudy-outline'></ion-icon>",
                iconNight: "<ion-icon name='cloudy-outline'></ion-icon>",
            }
        ] 
    },
    {
        name: "Snow",
        description: [
            { 
                title: "light snow",
                iconDay: "<ion-icon name='snow-outline'></ion-icon>",
                iconNight: "<ion-icon name='snow-outline'></ion-icon>",
            }, 
            { 
                title: "Snow",
                iconDay: "<ion-icon name='snow-outline'></ion-icon>",
                iconNight: "<ion-icon name='snow-outline'></ion-icon>",
            }, 
            { 
                title: "Heavy Snow",
                iconDay: "<ion-icon name='snow-outline'></ion-icon>",
                iconNight: "<ion-icon name='snow-outline'></ion-icon>",
            }, 
            { 
                title: "Sleet",
                iconDay: "<ion-icon name='snow-outline'></ion-icon>",
                iconNight: "<ion-icon name='snow-outline'></ion-icon>",
            }, 
            { 
                title: "Light shower sleet",
                iconDay: "<ion-icon name='snow-outline'></ion-icon>",
                iconNight: "<ion-icon name='snow-outline'></ion-icon>",
            }, 
            { 
                title: "Shower sleet",
                iconDay: "<ion-icon name='snow-outline'></ion-icon>",
                iconNight: "<ion-icon name='snow-outline'></ion-icon>",
            },
            { 
                title: "Light rain and snow",
                iconDay: "<ion-icon name='snow-outline'></ion-icon>",
                iconNight: "<ion-icon name='snow-outline'></ion-icon>",
            },
            { 
                title: "Shower snow",
                iconDay: "<ion-icon name='snow-outline'></ion-icon>",
                iconNight: "<ion-icon name='snow-outline'></ion-icon>",
            },
            { 
                title: "Heavy shower snow",
                iconDay: "<ion-icon name='snow-outline'></ion-icon>",
                iconNight: "<ion-icon name='snow-outline'></ion-icon>",
            },
        ] 
    },
    {
        name: "Rain",
        description: [
            { 
                title: "light rain",
                iconDay: "<ion-icon name='rainy-outline'></ion-icon>",
                iconNight: "<ion-icon name='rainy-outline'></ion-icon>",
            },
            { 
                title: "moderate rain",
                iconDay: "<ion-icon name='rainy-outline'></ion-icon>",
                iconNight: "<ion-icon name='rainy-outline'></ion-icon>",
            },
            { 
                title: "heavy intensity rain",
                iconDay: "<ion-icon name='rainy-outline'></ion-icon>",
                iconNight: "<ion-icon name='rainy-outline'></ion-icon>",
            },
            { 
                title: "very heavy rain",
                iconDay: "<ion-icon name='rainy-outline'></ion-icon>",
                iconNight: "<ion-icon name='rainy-outline'></ion-icon>",
            },
            { 
                title: "extreme rain",
                iconDay: "<ion-icon name='rainy-outline'></ion-icon>",
                iconNight: "<ion-icon name='rainy-outline'></ion-icon>",
            },
            { 
                title: "freezing rain",
                iconDay: "<ion-icon name='snow-outline'></ion-icon>",
                iconNight: "<ion-icon name='snow-outline'></ion-icon>",
            },
            { 
                title: "light intensity shower rain",
                iconDay: "<ion-icon name='rainy-outline'></ion-icon>",
                iconNight: "<ion-icon name='rainy-outline'></ion-icon>",
            },
            { 
                title: "shower rain",
                iconDay: "<ion-icon name='rainy-outline'></ion-icon>",
                iconNight: "<ion-icon name='rainy-outline'></ion-icon>",
            },
            { 
                title: "heavy intensity shower rain",
                iconDay: "<ion-icon name='rainy-outline'></ion-icon>",
                iconNight: "<ion-icon name='rainy-outline'></ion-icon>",
            },
            { 
                title: "ragged shower rain",
                iconDay: "<ion-icon name='rainy-outline'></ion-icon>",
                iconNight: "<ion-icon name='rainy-outline'></ion-icon>",
            },
        ] 
    },
    {
        name: "Drizzle",
        description: [
            { 
                title: "light intensity drizzle",
                iconDay: "<ion-icon name='rainy-outline'></ion-icon>",
                iconNight: "<ion-icon name='rainy-outline'></ion-icon>"
            },
            { 
                title: "drizzle",
                iconDay: "<ion-icon name='rainy-outline'></ion-icon>",
                iconNight: "<ion-icon name='rainy-outline'></ion-icon>"
            },
            { 
                title: "heavy intensity drizzle",
                iconDay: "<ion-icon name='rainy-outline'></ion-icon>",
                iconNight: "<ion-icon name='rainy-outline'></ion-icon>"
            },
            { 
                title: "light intensity drizzle rain",
                iconDay: "<ion-icon name='rainy-outline'></ion-icon>",
                iconNight: "<ion-icon name='rainy-outline'></ion-icon>"
            },
            { 
                title: "drizzle rain",
                iconDay: "<ion-icon name='rainy-outline'></ion-icon>",
                iconNight: "<ion-icon name='rainy-outline'></ion-icon>"
            },
            { 
                title: "heavy intensity drizzle rain",
                iconDay: "<ion-icon name='rainy-outline'></ion-icon>",
                iconNight: "<ion-icon name='rainy-outline'></ion-icon>"
            },
            { 
                title: "shower rain and drizzle",
                iconDay: "<ion-icon name='rainy-outline'></ion-icon>",
                iconNight: "<ion-icon name='rainy-outline'></ion-icon>"
            },
            { 
                title: "heavy shower rain and drizzle",
                iconDay: "<ion-icon name='rainy-outline'></ion-icon>",
                iconNight: "<ion-icon name='rainy-outline'></ion-icon>"
            },
            { 
                title: "shower drizzle",
                iconDay: "<ion-icon name='rainy-outline'></ion-icon>",
                iconNight: "<ion-icon name='rainy-outline'></ion-icon>"
            },
        ]
    },
    {
        name: "Thunderstorm",
        description: [
            { 
                title: "thunderstorm with light rain",
                iconDay: "<ion-icon name='thunderstorm-outline'></ion-icon>",
                iconNight: "<ion-icon name='thunderstorm-outline'></ion-icon>"
            },
            { 
                title: "thunderstorm with rain",
                iconDay: "<ion-icon name='thunderstorm-outline'></ion-icon>",
                iconNight: "<ion-icon name='thunderstorm-outline'></ion-icon>"
            },
            { 
                title: "thunderstorm with heavy rain",
                iconDay: "<ion-icon name='thunderstorm-outline'></ion-icon>",
                iconNight: "<ion-icon name='thunderstorm-outline'></ion-icon>"
            },
            { 
                title: "light thunderstorm",
                iconDay: "<ion-icon name='flash-outline'></ion-icon>",
                iconNight: "<ion-icon name='flash-outline'></ion-icon>"
            },
            { 
                title: "thunderstorm",
                iconDay: "<ion-icon name='flash-outline'></ion-icon>",
                iconNight: "<ion-icon name='flash-outline'></ion-icon>"
            },
            { 
                title: "heavy thunderstorm",
                iconDay: "<ion-icon name='flash-outline'></ion-icon>",
                iconNight: "<ion-icon name='flash-outline'></ion-icon>"
            },
            { 
                title: "ragged thunderstorm",
                iconDay: "<ion-icon name='flash-outline'></ion-icon>",
                iconNight: "<ion-icon name='flash-outline'></ion-icon>"
            },
            { 
                title: "thunderstorm with light drizzle",
                iconDay: "<ion-icon name='thunderstorm-outline'></ion-icon>",
                iconNight: "<ion-icon name='thunderstorm-outline'></ion-icon>"
            },
            { 
                title: "thunderstorm with drizzle",
                iconDay: "<ion-icon name='thunderstorm-outline'></ion-icon>",
                iconNight: "<ion-icon name='thunderstorm-outline'></ion-icon>"
            },
            { 
                title: "thunderstorm with heavy drizzle",
                iconDay: "<ion-icon name='thunderstorm-outline'></ion-icon>",
                iconNight: "<ion-icon name='thunderstorm-outline'></ion-icon>"
            },
        ]
    },
]

function GetIcon(main, description) {
    var timeH = new Date().getHours();
    var timeM = new Date().getHours();
    var dayOrNight = "";

    if(timeH < 20 && timeM > 5) {
        dayOrNight = "Day";
    }else {
        dayOrNight = "Night";
    }

    var item = icons.find((e) => e.name === main)

    if(item === undefined)
        return <ion-icon name='partly-sunny-outline'></ion-icon>;

    var icon = item.description.find((e) => e.title === description);

    if(icon === undefined)
        return <ion-icon name='partly-sunny-outline'></ion-icon>;

    if(dayOrNight === "Day") {
        return icon.iconDay;
    }else {
        return icon.iconNight;
    }
    
}

const Weather = ({weatherData}) => {

    const [i, setIcon] = useState('');

    useEffect(() => {
        setIcon(GetIcon(weatherData.weather[0].main, weatherData.weather[0].description));

    }, [weatherData])

    if(weatherData === undefined)
        return <></>;

    return (
        <div className="info">
            <div className="weather-icon" dangerouslySetInnerHTML={{__html: i}} >
               
            </div>
            <h2 className="header">{weatherData.name}, <span>{weatherData.sys.country}</span></h2>
            <p className="weather">{weatherData.weather[0].description}</p>
            <div className="wind">
                <img src={Wind} alt="" />
                <p>{weatherData.wind.speed} m/s <ion-icon style={{transform: `rotate(${weatherData.wind.deg}deg)`}} name="arrow-up-outline"></ion-icon></p>
            </div>
            <div className="weather-info">
                <div className="weather-data-container">
                    <p className="weather-data">{((weatherData.main.temp - 273.15).toFixed(1))}<span>°c</span></p>
                    <p className="weather-data-name">Temperature</p>
                </div>
                <div className="weather-data-container">
                    <p className="weather-data">{((weatherData.main.feels_like - 273.15).toFixed(1))}<span>°c</span></p>
                    <p className="weather-data-name">Feels Like</p>
                </div>
            </div>
        </div>
    )
}

export default Weather;