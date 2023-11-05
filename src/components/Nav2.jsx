import {Component} from "react";
import {Col, Container, Nav, Navbar} from "react-bootstrap";


class Pippo extends Component {
    render() {
        return (
            <Container fluid={"sm"} className={"bg-light"}>
                <Navbar className={"d-flex justify-content-between"}>
                    <Col xl={6} lg={4}>
                        <h1 className={"h3"}>WowMet</h1>
                    </Col>
                    <Col xl={6} lg={4} className={"d-flex justify-content-center"}>
                        <Nav.Link className={"h3 m-0 fw-bold mx-3"}>Città</Nav.Link>
                        <Nav.Link className={"h3 m-0 fw-bold mx-3"}>Home</Nav.Link>
                    </Col>
                </Navbar>

            </Container>
        )
    }
}

export default Pippo