import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Machine from "../Assets/machineicon.png";
import Search from "../Assets/searchicon.png";
import "./Body.css";

function Body() {
  return (
    <div>
      <Container>
        <Row className="reverse-row">
          <Col className="image">
            <img src={Machine} alt="1" className="img-fluid" />
          </Col>
          <Col className="text-col">
            <div>
              <h3 className="text-heading">Web & Mobile App Development</h3>
              <br />
              <p className="text-content">
                Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks which tailor content and engagement
                methods to respond to different intents shown by your potential
                customers who interact with your business online.
              </p>
              <button className="home-button">LEARN MORE</button>
            </div>
          </Col>
        </Row>
        <br /> <br />
        <Row className="reverse-row">
          <Col className="text-col">
            <div>
              <h3 className="text-heading">Digital Strategy Consulting</h3>
              <br />
              <p className="text-content">
                Your digital strategy should complement the overall marketing
                strategy of the company. In online marketing, each component
                will never work in isolation and every business needs a
                different mix. We provide a clear concept and strategic overview
                to find the most efficient model for your business.
              </p>
              <button className="home-button">LEARN MORE</button>
            </div>
          </Col>
          <Col className="image">
            <img src={Search} alt="2" className="img-fluid" />
          </Col>
        </Row>
        <br />
        <Row className="last-row">
          <Col className="text-col">
            <div>
              <h3 className="text-heading-mid">Frequently asked questions</h3>
              <br />
              <h6 className="first-h6">
                Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
                <span className="minus">-</span>
              </h6>
              <br />
              <p className="text-content-mid">
                Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                suscipit id ipsum. Elementum ultrices nulla faucibus odio est
                sed aliquam. Sapien massa morbi risus sagittis tortor integer.
              </p>
              <br />
              <h6 className="second-h6">
                Lorem ipsum dolor sit amet consectetur. Tortor scelerisque
                integer? <span>+</span>
              </h6>
              <h6 className="second-h6">
                Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque
                nunc? <span>+</span>
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Body;
