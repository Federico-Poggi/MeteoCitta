function ThisCity() {

    return (
        

        <Card className={"d-flex flex-row"}>
            <CardImg src={"http://placekitten.com/g/80/50"} className={"w-50"} alt='immagine'/>
            <p className={"h4"}>Meteo: {cityInfo.name}</p>
            <p className={"h5"}>Max: {cityInfo.main.temp_max}°C</p>
            <p className={"h5"}>Mix: {cityInfo.main.temp_min}°C</p>
            <p className={"h5"}>Percepita:{cityInfo.main.feels_like}°C</p>
        </Card>
    )
}

export default ThisCity