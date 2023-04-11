import React, { useState } from 'react'
import MainWeatherWindow from './components/MainWeatherWindow';
import CityInput from './components/CityInput';

const App = () => {
  const [CityWeather, SetCityWeather] = useState(['Toronto', '11d']);
  console.log(CityWeather)
  const ApiCall = async (city) => {
    const api_data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=6557810176c36fac5f0db536711a6c52`
    ).then(resp => resp.json());
    console.log(api_data);
    console.log(api_data.list[0].weather[0].icon);

    if (api_data.cod === '200'){
      await SetCityWeather([city, api_data.list[0].weather[0].icon])
      return true;
    }else return false;
  }


  return (
    <div className = 'App'>
      <header className = 'App-header'>
        <MainWeatherWindow CityWeather = {CityWeather}/>
        <CityInput makeApiCall = {ApiCall} />
      </header>
    </div>
  )
}

export default App