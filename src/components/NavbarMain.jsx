import {Component} from "react";
import {Button, Col, Container, FormControl, InputGroup, Navbar} from "react-bootstrap";
import {IonIcon} from "@ionic/react";
import {search} from 'ionicons/icons'
import {render} from "react-dom";


class NavbarMain extends Component {

    state = {
        city: " ",
        show: false,
        lat: "",
        lon: "",
    };


    handleInputChange = (name, value) => {
        this.setState({
            ...this.state,
            [name]: value,
            show: true,
        });
    }


    getCoordinate = async () => {

        try {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.state.city}&limit=${1}&appid=5d5db0399a52dc58601818a37fda598b`)
            if (response.ok) {
                const coordinate = await response.json();
                console.log(coordinate);
                coordinate.map((lat) => {
                    this.setState({
                        ...this.state,
                        lat: lat.lat,
                        lon: lat.lon,
                    })
                    
                })
            }
        } catch (err) {
            throw new Error("Error getting data");
        }
    }

    getMeteoCity = async () => {
        try {
            const meteo = await fetch(`api.openweathermap.org/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.lon}&appid=5d5db0399a52dc58601818a37fda598b`)
            if (meteo.ok) {
                const meteoData = await meteo.json();
                console.log(meteoData);
            }
        } catch (err) {
            throw new Error("err")
        }
    }

    render() {
        return (

            <Container fluid={"sm"}>
                <Navbar className={"d-flex justify-content-between"}>
                    <Col xl={6} lg={4}>
                        <h1 className={"h3"}>WowMet</h1>
                    </Col>
                    <Col xl={2} lg={4}>
                        <InputGroup className={"d-none d-sm-flex"}>
                            <FormControl placeholder={"Search"} onChange={(e) => {
                                this.handleInputChange('city', e.target.value)

                            }}/>
                            <Button variant={"outline-dark"}
                                    type={"submit"}
                                    className={" d-flex flex-column justify-content-center"}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.getCoordinate();
                                    }}
                            ><IonIcon icon={search}></IonIcon></Button>
                        </InputGroup>
                    </Col>
                </Navbar>

            </Container>
            // da aggiungere sezione con risultati ricerc
        )
    }
}

export default NavbarMain