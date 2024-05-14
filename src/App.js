import React, { useState } from "react";

const apiKey = "876d6473233cd5de68039d0a9c28d0a6";
const url = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&q=`;

function App() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = () => {
    fetch(`${url}${cityName}&units=metric`)
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request failed!");
        },
        (networkError) => {
          console.log(networkError.message);
        }
      )
      .then((data) => setWeatherData(data));
  };

  return (
    <div className="App h-screen px-24 bg-blue-200">
      <h1 className="text-4xl font-bold pt-12 pb-6">Search city:</h1>
      <div className="">
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          placeholder="London"
          className="border-2 border-blue-500 rounded-full px-4 py-2"
        ></input>
        <button
          type="submit"
          onClick={getWeather}
          className="bg-blue-700 px-4 py-2 ml-4 rounded-full text-white font-medium"
        >
          Get weather
        </button>
      </div>
      {weatherData && weatherData.main && (
        <div className="text-6xl mt-12 min-h-80 grid grid-cols-2 grid-rows-2">
          <div className="flex flex-col items-start gap-4 col-span-2">
            <div className="flex gap-4">
              <h1 className="font-bold text-blue-600">{weatherData.name}</h1>
              <h2 className="">{Math.floor(weatherData.main.temp)}ºC</h2>
            </div>
            <div>
              <h3 className="text-2xl">{weatherData.weather[0].description}</h3>
            </div>
          </div>
          <div className="text-xl">
            <h2>
              Minimaal:{" "}
              <span className="font-bold">
                {Math.floor(weatherData.main.temp_min)}ºC
              </span>
            </h2>
            <h2>
              Maximaal:{" "}
              <span className="font-bold">
                {Math.floor(weatherData.main.temp_max)}ºC
              </span>
            </h2>
          </div>
          <div className="text-xl">
            <h2>
              Windsnelheid:{" "}
              <span className="font-bold">{weatherData.wind.speed}m/s</span>
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
