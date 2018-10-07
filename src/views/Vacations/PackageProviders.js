import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardHeader, CardBody,CardTitle, CardSubtitle,CardImg, CardText, Row, Col,CustomInput,ButtonGroup } from "reactstrap";
import { Button, Form, FormGroup, Label, Radio,Table,Jumbotron } from "reactstrap";
import{InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import{Container } from "reactstrap";
import classnames from 'classnames';
import img_autorent from '../../assets/logos/autorentals.png';
import img_trip from '../../assets/logos/trip.png';
import img_kaya from '../../assets/logos/kaya.png';
import img_hot from '../../assets/logos/hot.png';
import img_hot1 from '../../assets/logos/navo1.png';
import img_hot2 from '../../assets/logos/navo2.png';
import '../../assets/css/checkboxStyles.css'
import HeadingStyle1 from '../../assets/css/Headings1.css'

class PackageProviders extends React.Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <div><CardHeader tag="h4"><text style={HeadingStyle1}>Package Providers</text></CardHeader></div>
                                <CardBody>
                                    <Form>
                                        <div id="pacakageProviders" data-tip data-for='PackageProviderTip'>

                                               <span> <Input type="checkbox" checked="checked" ></Input>
                                                <Label for="adults"><img className="logo1" src={img_autorent}  alt="fireSpot"/></Label></span>

                                                <span><Input type="checkbox" class="form-control"></Input>
                                                <Label for="kids"><img className="logo1" src={img_trip}  alt="fireSpot"/></Label></span>

                                                <span><Input type="checkbox" class="form-control"></Input>
                                                <Label for="kids"><img className="logo1" src={img_kaya}  alt="fireSpot"/></Label></span>

                                                 <span><Input type="checkbox" class="form-control"></Input>
                                                 <Label for="kids"><img className="logo1" src={img_hot}  alt="fireSpot"/></Label></span>

                                                 <span><Input type="checkbox" class="form-control"></Input>
                                                 <Label for="kids"><img className="logo1" src={img_hot1}  alt="fireSpot"/></Label></span>
                                        </div>
                                        <div class ="row">

                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default PackageProviders;
