import { Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import isLogged from "../../utilities/isLogged";
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
            <Link to="/products" className="router-link">
              <Button variant="outline-light mx-5">Products</Button>
            </Link>
            {isLogged() ? (
              <Link to="/users" className="router-link">
                <Button variant="outline-light mx-5">Users</Button>
              </Link>
            ) : null}
          </Col>
          <Col xs={2} className="d-flex justify-content-end">
            {isLogged() ? (
              <Button
                onClick={() => localStorage.removeItem("jwtToken")}
                variant="outline-light mx-2"
              >
                Logout
              </Button>
            ) : null}
            {!isLogged() ? (
              <Link to="/login" className="router-link mx-1">
                <Button variant="outline-light">Login</Button>
              </Link>
            ) : null}
            {!isLogged() ? (
              <Link to="/register" className="router-link">
                <Button variant="outline-light">Register</Button>
              </Link>
            ) : null}
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
