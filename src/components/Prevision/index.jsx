import "./index.css";
import Card from "../Card";
// import ButtonDegree from "../ButtonDegree";

const Prevision = ({ name, time, temp, h1, h2, h3, h4 }) => {
    // const tempC = (temp - 32) / 5 / 9;
    // const tempF = temp;

    // console.log(tempC);
    // console.log(tempF);
    // console.log(degree);
    // console.log(h1, h2);

    return (
        <section className="prevision">
            <div className="set-location">
                {name && <h2 className="location-city">{name}</h2>}
                {time && <h3 className="location-time">{time}</h3>}
                {/* {!degree ? "" :} */}
                {temp && <h1 className="location-degree">{Math.round(temp)}°C</h1>}
            </div>

            <div className="set-card">
                <Card
                    time={h1[0]}
                    icon={h1[1]}
                    alt={h1[2]}
                    temp={h1[3]}
                />

                <Card
                    time={h2[0]}
                    icon={h2[1]}
                    alt={h2[2]}
                    temp={h2[3]}
                />

                <Card
                    time={h3[0]}
                    icon={h3[1]}
                    alt={h3[2]}
                    temp={h3[3]}
                />

                <Card
                    time={h4[0]}
                    icon={h4[1]}
                    alt={h4[2]}
                    temp={h4[3]}
                />
            </div>
        </section>
    )
}

export default Prevision;