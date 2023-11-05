import {Card, CardImg, Col, Container, Row} from "react-bootstrap";
import ThisCity from "./ThisCity.jsx";

function CityInfo({cityInfo}) {
    return (
        <Container className={"container-lg"}>
            <Row>
                <Col>
                    <ThisCity/>
                </Col>
            </Row>
        </Container>
    )
}

export default CityInfo