import "./index.css";

const WeatherDetails = (dailyPrevision) => {
    return (
        <section className="weather-details">
            <div className="set-details">
                <h5 className="topic">
                    Day
                </h5>

                <ul className="list-topic">
                    <li>
                        <h5 className="topic">
                            Chance of rain
                        </h5>
                    </li>

                    <li>
                        <h5 className="topic">
                            Humidity
                        </h5>
                    </li>

                    <li>
                        <h5 className="topic">
                            Wind
                        </h5>
                    </li>

                    <li>
                        <h5 className="topic">
                            Temperature
                        </h5>
                    </li>
                </ul>

            </div>

            <div className="set-details details-results">
                <h3 className="topic-result">
                    ...
                </h3>

                <ul className="list-topic-result">
                    <li>
                        <h3 className="topic-result">
                            {dailyPrevision[0][0]}%
                        </h3>
                    </li>

                    <li>
                        <h3 className="topic-result">
                            {dailyPrevision[0][1]}%
                        </h3>
                    </li>

                    <li>
                        <h3 className="topic-result">
                            {Math.round(dailyPrevision[0][2] * 3.6)}km/h
                        </h3>
                    </li>

                    <li>
                        <h3 className="topic-result">
                            {Math.round(dailyPrevision[0][3])}°C
                        </h3>
                    </li>
                </ul>

            </div>

        </section>
    )
}

export default WeatherDetails;