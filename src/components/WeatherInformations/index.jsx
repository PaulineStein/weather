import "./index.css";

const WeatherInformations = ({ humidity, pressure, wind, visibility }) => {
    return (
        <section className="weather-informations">
            <p className="informations-title">Now</p>


            <ul className="set-info">
                <li className="info">
                    <h3 className="info-title">
                        Chance of Rain
                    </h3>

                    <h4 className="info-result">
                        12%
                    </h4>
                </li>

                <li className="info">
                    <h3 className="info-title">
                        Humidity
                    </h3>

                    <h4 className="info-result">
                        {humidity}%
                    </h4>
                </li>

                <li className="info">
                    <h3 className="info-title">
                        Wind Speed
                    </h3>

                    <h4 className="info-result">
                        {Math.round(wind * 3.6)} k/h
                    </h4>
                </li>

                <li className="info">
                    <h3 className="info-title">
                        Visibility
                    </h3>

                    <h4 className="info-result">
                        {Math.round(visibility / 1000)}km
                    </h4>
                </li>

                <li className="info">
                    <h3 className="info-title">
                        Pressure
                    </h3>

                    <h4 className="info-result">
                        {pressure} hPa
                    </h4>
                </li>

            </ul>
        </section>
    )
}

export default WeatherInformations;