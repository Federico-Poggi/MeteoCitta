import {Button, Card, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import {IonIcon} from "@ionic/react";
import {search} from "ionicons/icons";
import {Component} from "react";
import {useNavigate} from "react-router-dom";
import CityInfo from "./CityInfo.jsx";

class SubNav extends Component {
    state = {
        cityInfo: [],
        isLoading: true,
        show: false,
    }


    handleInputChange = (name, value) => {
        this.setState({
            ...this.state,
            [name]: value,

        });
    }


    getCoordinate = async () => {

        try {
            let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&limit=2&units=metric&lang=it&appid=5d5db0399a52dc58601818a37fda598b`)
            if (response.ok) {
                const coordinate = await response.json();
                console.log(coordinate);
                this.setState({
                    cityInfo: coordinate
                })
            }
        } catch (err) {
            throw new Error("Error getting data");
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.show !== false) {
            return (
                <CityInfo cityInfo={this.state.cityInfo}
                />
            )
        }
    }


    render() {
        return (

            <div>
                <Container fluid={"sm"} className={"d-flex justify-content-center"}>
                    <Row>
                        <Col>
                            <h5 className={"text-center"}>Cerca la tua Città</h5>
                            <InputGroup>
                                <FormControl placeholder={"Search"} onChange={(e) => {
                                    this.handleInputChange('city', e.target.value)
                                }}/>
                                <Button variant={"outline-dark"}
                                        type={"submit"}
                                        className={" d-flex flex-column justify-content-center"}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            this.getCoordinate();
                                            this.setState({
                                                ...this.state,
                                                show: true,
                                            })
                                        }}><IonIcon
                                    icon={search}></IonIcon>
                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
               

            </div>


        )
    }
}

export default SubNav