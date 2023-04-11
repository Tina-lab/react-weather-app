import React from 'react'
import './MainWeatherWindow.css';

const MainWeatherWindow = ({CityWeather}) => {
  const Title = <h1 className='title'>Weather Forecast</h1>;
  console.log(CityWeather)
  console.log('print the rendering image')
  console.log(CityWeather
    ? '../images/${CityWeather[1]}.svg'
    : '../images/01d.svg')
  return (
    <div className='main'>
      <div className='inner-main'>
        {/* {Title} */}
        <img
          src={CityWeather
            ? require(`../images/${CityWeather[1]}.svg`)
            : require('../images/01d.svg')
          }
          // src = {require('../images/01d.svg')}
          alt='sun'
          style={{
            visibility: 'visible' ,
            opacity:  '1' 
          }}
        /> 
      </div>
    </div>
  );
}

export default MainWeatherWindow