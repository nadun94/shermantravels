import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardHeader, CardBody,CardTitle, CardSubtitle,CardImg, CardText, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Radio,Table,Jumbotron } from "reactstrap";
import{InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import{Container } from "reactstrap";

class Members extends React.Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>

                            <Card>
                                <CardHeader tag="h4">Members</CardHeader>
                                <CardBody>
                                    <Form>

                                    <FormGroup>

                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio1" />{' '}
                                            One person
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio1" />{' '}
                                            Two people
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio1" />{' '}
                                                Family
                                            </Label>
                                        </FormGroup>

                                        <Table borderless>
                                            <tr>
                                                <td> <Label for="adults">Adults</Label></td>
                                                <td><Input type="number" class="form-control" id="adults" data-tip data-for='adultsTip'></Input></td>
                                                <td> <Label for="kids">Kids</Label></td>
                                                <td><Input type="number" class="form-control" id="adults" data-tip data-for='kidsTip'></Input></td>
                                            </tr>
                                        </Table>


                                           <Table borderless>
                                               <tr>
                                                   <td> <Label for="kids3">Have Kids Under 3 years</Label></td>
                                                   <td><Input type="checkbox" class="form-control"></Input></td>
                                                   <td><Input type="number" class="form-control" id="kids3" data-tip data-for='under3Tip'></Input></td>
                                               </tr>
                                               <tr>
                                                   <td> <Label for="kids12">Have Kids aged 3-12 yrs</Label></td>
                                                   <td><Input type="checkbox" class="form-control"></Input></td>
                                                   <td><Input type="number" class="form-control" id="kids12" data-tip data-for='under12Tip'></Input></td>
                                               </tr>
                                           </Table>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio1" />{' '}
                                                Group
                                            </Label>
                                        </FormGroup>
                                     </FormGroup>
                                        <Table borderless>
                                            <tr>
                                                <td> <Label for="adults">Number of adults</Label></td>
                                                <td><Input type="number" class="form-control" id="adults" data-tip data-for='adultsTip'></Input></td>
                                            </tr>
                                        </Table>
                                        <Button outline color="danger" id="memberButton" data-tip data-for='MemberButtonTip'>Save Details</Button>
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

export default Members;
