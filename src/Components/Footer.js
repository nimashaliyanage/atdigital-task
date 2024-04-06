import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Footer.css";
import logo from "../Assets/ATD logo.png";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <br />
        <Row className="footer-row">
          <Col lg={3} xs={12}>
            <img src={logo} alt="logo" className="footer-logo" />
            <br />
            <p className="textarea">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
            <br />
            <br />
          </Col>
          <Col lg={3} xs={12} className="foot-up-right">
            <h3>Our Technologies</h3>
            <h6>
              <span>ReactJS</span>
              <br />
              <br />
              <span>Gatsby</span>
              <br />
              <br />
              <span>NextJS</span>
              <br />
              <br />
              <span>NodeJS</span>
            </h6>
          </Col>
          <br />
          <Col lg={3} xs={12} className="foot-up-right">
            <h3>Our Services</h3>
            <h6>
              <span>Social Media Marketing</span>
              <br />
              <br />
              <span>Web & Mobile App Development</span>
              <br />
              <br />
              <span>Data & Analytics</span>
            </h6>
          </Col>
          <br />
          <br />
        </Row>
        <hr />
        <Row className="copyrights">
          <Col xs={12}>Privacy Policy | Terms & Conditions</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
