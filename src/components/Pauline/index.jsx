const Pauline = ({ data }) => {
    console.log(data);
    return (
        <ul>
            {
                data ? data.map(data => (
                    <li>{data.city.name}</li>
                )) : <li>Waiting</li>
            }
        </ul>
    )
}

export default Pauline;