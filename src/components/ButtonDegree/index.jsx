import { useState } from "react";
import "./index.css";

const ButtonDegree = () => {
    const [degree, setDegree] = useState(true);

    const handleDegree = () => {
        setDegree(!degree);
    }

    return (
        <button className="button-degree" type="button" onClick={() => handleDegree()}>
            <span id="C-degree" className={degree ? 'bold' : ''} >C°</span>
            <span> / </span>
            <span id="F-degree" className={!degree ? "bold" : ""}>F°</span>
        </button>
    )
}

export default ButtonDegree;