import {Component} from "react";
import {Button, Col, Container, FormControl, InputGroup, Navbar} from "react-bootstrap";
import {IonIcon} from "@ionic/react";
import {search} from 'ionicons/icons'


class NavbarMain extends Component {
    state = {
        city: " ",
    };
    getCoordinate = async () => {

        try {
            const latLon = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.state.city}&limit=5&appid=5d5db0399a52dc58601818a37fda598b`)
            if (latLon.ok) {
                const coordinate = latLon.json()
                console.log(coordinate);
                return coordinate
            }
        } catch (err) {
            throw new Error("Error getting data");
        }


    }


    getWeather = async () => {
        try {
            const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=5d5db0399a52dc58601818a37fda598b")
            if (response.ok) {
                console.log(response.json());

            }
        } catch (err) {
            throw new Error("Error getting data");
        }
    }

    handleInputChange = (name, value) => {
        this.setState({
            ...this.state,
            [name]: value,
        });
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
                            <Button variant={"outline-dark"} className={" d-flex flex-column justify-content-center"}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.getCoordinate()
                                    }}

                            ><IonIcon icon={search}></IonIcon></Button>
                        </InputGroup>
                    </Col>
                </Navbar>
            </Container>
        )
    }
}

export default NavbarMain