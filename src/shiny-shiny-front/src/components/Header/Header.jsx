import { Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header p-2">
      <Container fluid>
        <Row>
          <Col className="d-flex justify-content-center">
            <Link to="/home" className="router-link">
              <Button variant="outline-light mx-5">Home</Button>
            </Link>
            <Link to="/users" className="router-link">
              <Button variant="outline-light mx-5">Users</Button>
            </Link>
          </Col>
          <Col xs={2} className="d-flex justify-content-end">
            <Button variant="outline-light mx-2">Logout</Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
