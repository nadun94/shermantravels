import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

// function that returns a color based on an interval of numbers

import { PanelHeader, CardCategory } from "components";
import slide1 from '../../assets/img/p1.jpg';
import slide2 from '../../assets/img/bg4.jpg';
import slide3 from '../../assets/img/n1.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Home extends React.Component {
  render() {
    return (
      <div>

        <div className="content">
          {/* <PanelHeader
          size="sm" /> */}
          <Row>
            <Col xs={12} md={15}>
              <div className="chart-area">
                <div id="slide1" >
                  <Carousel>
                    <div>
                      <img src={slide1} />
                      <p className="legend">To comfort you</p>
                    </div>
                    <div>
                      <img src={slide2} />
                      <p className="legend">Take you to your dream places</p>
                    </div>
                    <div>
                      <img src={slide3} />
                      <p className="legend">Make your home</p>
                    </div>
                  </Carousel>

                </div>
              </div>
              {/* <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Industrial Training Unit</CardCategory>
                  <CardTitle tag="h4">Internship program management</CardTitle>
                </CardHeader>
                <CardBody>
  
                 
                </CardBody>
              </Card> */}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
