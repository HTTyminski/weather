import { useState } from 'react';
import './App.css';

function App() {
  const [place, setPlace] = useState('Curitiba');
  const [placeInfo, setPlaceInfo] = useState({});

  const handleFetch = () => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=c64b322290714b5690b232140220902&q=${place}&days=1&aqi=no&alerts=no`
      )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then((data) => 
      setPlaceInfo({
        name: data.location.name, //cidade
        country: data.location.country, //pais
        farenheit: {
          current: data.current.temp_c,
          high: data.forecast.forecastday[0].day.maxtemp_c,
          low: data.forecast.forecastday[0].day.mintemp_c,
        },
        condition: data.current.condition.text
      })
    );
  };

  return (
    <div className="App">

      <div className="search-input">
        <input 
          type='text' 
          value={place} 
          onChange={(e) => setPlace(e.target.value)}
        />
        <button onClick={handleFetch}>Search</button>
      </div>

      <div className="weather-container">
        <div className="top-part">
          {/* <h1>{placeInfo.farenheit.current}</h1> */}
          <div className="condition-high-low">
            {/* <h1>{placeInfo.condition}</h1>
            <h1>{placeInfo.farenheit.high}</h1>
            <h1>{placeInfo.farenheit.low}</h1> */}
          </div>
        </div>
      </div>

      {/* <h2>{placeInfo.name},{placeInfo.country}</h2> */}
     
    </div>
  );
}

export default App;
