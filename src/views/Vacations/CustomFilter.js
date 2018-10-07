import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardHeader, CardBody,CardTitle, CardSubtitle,CardImg, CardText, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Radio,Table,Jumbotron } from "reactstrap";
import{InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import{Container } from "reactstrap";
import StarRating from "./StarRating";

class CustomFilter extends React.Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col >
                            <Card>
                                <CardHeader tag="h4">Custom Filter</CardHeader>
                                <CardBody>
                                    <Form>
                                        <FormGroup>
                                        <Table borderless>
                                            <tr><td><Label for="cPrice">Compare by Price</Label></td>
                                                <td><Input type="checkbox" class="form-control" id="cPrice"></Input></td>
                                            </tr>
                                            <tr><td><Label for="kids">Enter Budget range</Label></td></tr>
                                        </Table>
                                        </FormGroup>
                                        <FormGroup>
                                            <Table borderless>
                                            <tr>
                                                <td> <Label for="adults">Min</Label></td>
                                                <td> <InputGroup>
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>$</InputGroupText>
                                                        <Input type="number" class="form-control" id="Min" data-tip data-for='MinBudgetTip'></Input>
                                                    </InputGroupAddon>
                                                </InputGroup></td>
                                                <td> <Label for="kids">Max</Label></td>
                                                <td> <InputGroup>
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>$</InputGroupText>
                                                        <Input type="number" class="form-control" id="Max" data-tip data-for='MaxBudgetTip'></Input>
                                                    </InputGroupAddon>
                                                </InputGroup></td>
                                            </tr>
                                            </Table>
                                        </FormGroup>
                                        <FormGroup>
                                        <Table borderless>
                                            <tr><td><Label for="cRating">Compare by Rating</Label></td>
                                                <td><Input type="checkbox" class="form-control" id="cRating"></Input></td>
                                            </tr>
                                        </Table >
                                        <div id="star" data-tip data-for='StarsTip'><StarRating/></div>
                                        <Button outline color="danger" id="FilterButton" data-tip data-for='FilterSearchButtonTip'>Search</Button>
                                        </FormGroup>
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

export default CustomFilter;
