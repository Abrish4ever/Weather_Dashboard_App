import '../styles/WeatherApp.css'
import { FaMapMarker } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import loadingGif from '../assets/images/loading.gif';
import { useEffect, useState } from 'react';
import WeatherDisplay from './WeatherDisplay';



const WeatherApp = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false)

    const api_key = import.meta.env.VITE_WEATHER_API_KEY;

    useEffect(() => {
        const fetchDefaultWeather = async () => {
            setLoading(true)
            const defaultLocation = "Addis Ababa";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=Metric&appid=${api_key}`;
            const res = await fetch(url);
            const defaultData = await res.json();
            setData(defaultData)
            setLoading(false)
        }
        fetchDefaultWeather();

    }, []);


    const handleInputLocation = (e) => {
        setLocation(e.target.value)
    }
    const search = async () => {
        if (location.trim() !== '') {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`;
            const res = await fetch(url);
            const searchData = await res.json();
            if (searchData.cod !== 200) {
                setData({ notFound: true })
            } else {
                setData(searchData);
                setLocation('');

            }
            setLoading(false)
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            search();
        }
    }

    const backgroundImages = {
        Clear: 'linear-gradient(to right, #f3b07c, #fcd283)',
        Clouds: 'linear-gradient(to right, #f3b07c, #9f8b91)',
        Rain: 'linear-gradient(to right, #5bc8fb, #80eaff)',
        Snow: 'linear-gradient(to right, #aff2ff, #fff)',
        Haze: 'linear-gradient(to right, #f3b07c, #71eeec)',
        Mist: 'linear-gradient(to right, #f3b07c, #71eeec)',
    }
    const backgroundImage = data.weather ? backgroundImages[data.weather[0].main] : 'linear-gradient(to right, #f3b07c, #fcd283)';


    return (
        <div data-test-id= "WeatherApp-container" className="w-full h-[100vh] bg-fixed flex bg-[#FCF5E5] justify-center items-center overflow-hidden">
            <div className="w-[40rem] h-[60rem] m-8 md:m-0 flex flex-col items-center relative p-8 rounded-[3rem] shadow-[-3rem 3rem 6rem rgba(0,0,0,0.1)]" style={{ backgroundImage }} >
                <div className="header">
                    <div className="name">
                        <h1>Weather Dashboard </h1>
                    </div>
                    <div className="search">
                        <div className="search-top">
                            <FaMapMarker className="icon " />
                            <div className="location">{data.name}</div>
                        </div>
                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="Enter location"
                                value={location}
                                onChange={handleInputLocation}
                                onKeyDown={handleKeyDown}
                            />
                            <FaMagnifyingGlass className="icon" onClick={search} />
                        </div>
                    </div>
                </div>
                {loading ? (<img className="loader" src={loadingGif} alt="loading" />) : data.notFound ? (<div className='not-found'>Not Found</div>) :
                    (
                        <WeatherDisplay data={data} />
                    )
                }

            </div>
        </div>
    );
}

export default WeatherApp;