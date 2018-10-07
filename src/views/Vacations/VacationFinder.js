import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardHeader, CardBody,CardTitle, CardSubtitle,CardImg, CardText, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Radio,Table,Jumbotron } from "reactstrap";
import{InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import{Container } from "reactstrap";
import ReactTooltip from 'react-tooltip';
import ToolTipSet from "./ToolTipSet";

class VacationFinder extends React.Component {

    render() {
        return (
            <div>
                <Container>

                   <Row>
                        <Col >

                            <Card>
                                <CardHeader tag="h4">VacationFinder</CardHeader>
                                <CardBody>
                                    <Form>
                                   <FormGroup>
                                       <Table borderless>
                                           <tr>
                                               <td> <Label for="arrivaldate">Arrival Date</Label></td>
                                               <td> <Input type="date" id="arrivaldate" data-tip data-for='arrivalTip' ></Input></td>
                                           </tr>
                                           <tr>
                                               <td><Label for="deaparturedate">Departure Date</Label></td>
                                               <td> <Input type="date" id="deaparturedate" data-tip data-for='departureTip'></Input></td>
                                           </tr>
                                       </Table>
                                   </FormGroup>
                                        <FormGroup>
                                    <Table borderless>
                                        <tr>
                                        <td> <Label>Vacation period</Label></td>
                                            <td><Input type="number" id="days" class="form-control" data-tip data-for='daysTip'></Input></td>
                                            <td> <Label for="Days">days</Label></td>
                                            <td><Input type="number" id="months" class="form-control" data-tip data-for='MonthsTip'></Input></td>
                                            <td> <Label for="months">Months</Label></td>
                                    </tr>
                                    </Table>
                                        </FormGroup>
                                        <FormGroup>
                                            <Table borderless>
                                                <tr>
                                                    <td> <Label for="Destination">Destination</Label></td>
                                                    <td> <Input type="select" id="Destination" data-tip data-for='destinationTip'></Input></td>

                                                </tr>
                                            </Table>
                                           </FormGroup>
                                    <Button outline color="primary" id="saveVacation" data-tip data-for='VacationButtonTip'>Save Details</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                   </Row>
                </Container>
                < ToolTipSet/>
            </div>
        );
    }
}

export default VacationFinder;
