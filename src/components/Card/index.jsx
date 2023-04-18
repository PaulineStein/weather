import "./index.css";

const Card = ({ time, icon, alt, temp }) => {
    return (
        <div className="card">
            <h2 className="card-time">
                {time}
            </h2>

            <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt={alt} className="card-img" />

            <h2 className="card-degree">{Math.round(temp)} °C</h2>
        </div>
    )
}

export default Card;