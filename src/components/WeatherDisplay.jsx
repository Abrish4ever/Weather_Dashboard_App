import '../styles/WeatherDisplay.css'
import { FaMapMarker } from 'react-icons/fa'
import { FaDroplet } from 'react-icons/fa6'
import { FaWind } from 'react-icons/fa6'
import sunny from '../assets/images/sunny.png';
import cloudy from '../assets/images/cloudy.png';
import rainy from '../assets/images/rainy.png';
import snowy from '../assets/images/snowy.png';


const WeatherDisplay = ({data}) => {

    const weatherImages = {
        Clear: sunny,
        Clouds: cloudy,
        Rain: rainy,
        Snow: snowy,
        Haze: cloudy,
        Mist: cloudy,
    }
    const weatherImage = data.weather ? weatherImages[data.weather[0].main] : null;

    const currentDate = new Date()
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const dayOfMonth = currentDate.getDate();
    const year = currentDate.getFullYear();
    const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;

    return (
        <>
            <div className="weather">
                <img src={weatherImage} className="w-[300rem]" alt="sunny" />
                <div className="absolute top-[40%] left-[50%] translate-x-[-50%] text-5xl text-gray-800">
                    {data.weather ? data.weather[0].main : null}
                </div>
                <div className="temp">{data.main ? `${Math.floor(data.main.temp)}°c` : null}</div>
            </div>
            <div className="weather-date">
                <p>{formattedDate}</p>
            </div>
            <div className="weather-data">
                <div className="humidity">
                    <div className="data-name">Humidity</div>
                    <FaDroplet className="icon" />
                    <div className="data">{data.main ? data.main.humidity : null} %</div>
                </div>
                <div className="wind">
                    <div className="data-name">Wind</div>
                    <FaWind className="icon" />
                    <div className="data">{data.wind ? data.wind.speed : null}Km/h</div>
                </div>
            </div>
        </>
    );
}

export default WeatherDisplay