import './App.css';
import Header from './components/Header';
import Prevision from './components/Prevision';
import WeatherInformations from './components/WeatherInformations';
import WeatherDetails from './components/WeatherDetails';
import Pauline from './components/Pauline'
import React, { useState, useEffect } from 'react';



function App() {
  const [datasForecast, setDatasForecast] = useState([]);
  const [listForeCast, setListForeCast] = useState([])
  // const [datasWeather, setDatasWeather] = useState([]);

  const [h0, setH0] = useState([]);
  const [h1, setH1] = useState([]);
  const [h2, setH2] = useState([]);
  const [h3, setH3] = useState([]);
  const [h4, setH4] = useState([]);
  const [dailyPrevision, setDailyPrevision] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const API_KEY = process.env.REACT_APP_API_KEY;




  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const responseForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=2643743&appid=${API_KEY}&units=metric`);

        // const responseWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.1257&appid=${API_KEY}&units=metric`);


        const dataForecast = await responseForecast.json();
        // console.log(dataForecast);
        const list = dataForecast.list.slice(0, 5)
        setListForeCast(list)
        console.log(listForeCast);

        // const dataWeather = await responseWeather.json();


        setDatasForecast(dataForecast);
        // setDatasWeather(dataWeather);


        let h0Array = [
          datasForecast?.city?.name,
          datasForecast?.list[0]?.dt_txt,
          datasForecast?.list[0]?.main?.temp,

          datasForecast?.list[0]?.main?.humidity,
          datasForecast?.list[0]?.wind?.speed,
          datasForecast?.list[0]?.visibility,
          datasForecast?.list[0]?.main?.pressure
        ]


        let h1Array = [
          datasForecast?.list[1]?.dt_txt,
          datasForecast?.list[1]?.weather[0]?.icon,
          datasForecast?.list[1]?.weather[0]?.description,
          datasForecast?.list[1]?.main?.temp
        ]

        let h2Array = [
          datasForecast?.list[2]?.dt_txt,
          datasForecast?.list[2]?.weather[0]?.icon,
          datasForecast?.list[2]?.weather[0]?.description,
          datasForecast?.list[2]?.main?.temp
        ]

        let h3Array = [
          datasForecast?.list[3]?.dt_txt,
          datasForecast?.list[3]?.weather[0]?.icon,
          datasForecast?.list[3]?.weather[0]?.description,
          datasForecast?.list[3]?.main?.temp
        ]

        let h4Array = [
          datasForecast?.list[4]?.dt_txt,
          datasForecast?.list[4]?.weather[0]?.icon,
          datasForecast?.list[4]?.weather[0]?.description,
          datasForecast?.list[4]?.main?.temp
        ]

        let dailyPrevisionArray = [
          [
            datasForecast?.list[8]?.dt_txt,
            datasForecast?.list[8]?.main?.humidity,
            datasForecast?.list[8]?.wind?.speed,
            datasForecast?.list[8]?.main?.temp
          ],
          //[
          //   datasForecast?.list[10]?.dt_txt,
          //   datasForecast?.list[10]?.main?.humidity,
          //   datasForecast?.list[10]?.wind?.speed,
          //   datasForecast?.list[10]?.main?.temp
          // ],
          //[
          //   datasForecast?.list[32]?.dt_txt,
          //   datasForecast?.list[32]?.main?.humidity,
          //   datasForecast?.list[32]?.wind?.speed,
          //   datasForecast?.list[32]?.main?.temp
          // ],
          //[
          //   datasForecast?.list[39]?.dt_txt,
          //   datasForecast?.list[39]?.main?.humidity,
          //   datasForecast?.list[39]?.wind?.speed,
          //   datasForecast?.list[39]?.main?.temp
          // ]
        ]

        setH0(h0Array);
        // console.log(h0Array);
        setH1(h1Array);
        // console.log(h1Array);
        setH2(h2Array);
        setH3(h3Array);
        setH4(h4Array);
        setDailyPrevision(dailyPrevisionArray);

      } catch (error) {
        // console.log('Error data :', error);
        setError(
          'Désolé, une erreur est survenue au chargement des données'
        );

      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);




  return (
    <>
      <Header />
      {datasForecast.length !== 0 && (
        <Prevision
          name={h0[0]}
          time={h0[1]}
          temp={h0[2]}
          h1={h1}
          h2={h2}
          h3={h3}
          h4={h4}
        />
      )}

      <WeatherInformations
        h0={h0}
      />
      <WeatherDetails
        dailyPrevision={dailyPrevision}
      />
      {/* <Pauline data={listForeCast} /> */}
    </>
  )
}

export default App;