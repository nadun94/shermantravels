import React from "react";
import classnames from "classnames";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { DateFormatInput, TimeFormatInput } from 'material-ui-next-pickers'
import {
    Card,
    Button,
    CardHeader,
    CardBody,
    Row,
    Col,
    ButtonGroup,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Badge,
    CardTitle,
    CardText,
    CardGroup,
    FormGroup,
    Input,
    Label,
    CardImg,
    Form,
    CustomInput
} from "reactstrap";
import { Tasks } from "components";
import DatePicker from "react-datepicker";
import moment from "moment";
import img_autorent from "../../assets/logos/navo1.png";
import img_trip from '../../assets/logos/Cruise1.png';
import img_kaya from '../../assets/logos/Cruise2.png';
import img_hot from '../../assets/logos/Cruise3.png';
import cruise1 from '../../assets/img/cruises.jpg';
import "react-datepicker/dist/react-datepicker.css";
import car1 from "../../assets/img/cr1.png";
import car2 from "../../assets/img/cr2.png";
import car3 from "../../assets/img/cr3.png";
import car4 from "../../assets/img/cr4.png";
import car5 from "../../assets/img/cr5.png";
import car6 from "../../assets/img/cr6.png";
import car7 from "../../assets/img/cr7.png";
import car8 from "../../assets/img/cr8.png";
import n1 from "../../assets/img/sh1.jpg";
import n2 from "../../assets/img/sh2.jpg";
import n3 from "../../assets/img/sh3.jpg";
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { arrow_back } from '@material-ui/icons';
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class Cruises extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            destination: "asia",
            activeTab: "1",
            startDate: moment(),
            show_tab: false,
            check_autowire: false,
            check_trip: false,
            check_hot: false,
            check_kayak: false,
            date1: "",
            time1: '',
            check_diff: false,
            tab_val: 0,
        };

        //this.handleDate = this.handleDate.bind(this);
        this.handleattributes = this.handleattributes.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.selectRates = this.selectRates.bind(this);
        this.goBack = this.goBack.bind(this);
        // this.clear=this.clear.bind(this);
        // this.check=this.check.bind(this);
        // checkerror=this.checkerror.bind(this);
        this.handleDesSelect = this.handleDesSelect.bind(this);
    }


    // clear() {

    //     this.setState({

    //     })

    // }
    goBack() {
        this.setState({ show_tab: false })
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleDesSelect(e){
        this.setState({
            [e.target.name]: [e.target.value]
        });
    }

    handleChangeSwitch = name => event => {
        this.setState({ [name]: event.target.checked });
    };
    handleChange(date1) {
        this.setState({
            startDate: date1
        });
    }
    onChangeDate1 = (date1: Date) => {
        console.log('Date: ', date1)
        this.setState({ date1 })
    }
    onChangeTime1 = (time1: Date) => {
        console.log('Time: ', time1)
        this.setState({ time1 })
    }
    onChangeDate2 = (date2: Date) => {
        console.log('Date: ', date2)
        this.setState({ date2 })
    }
    onChangeTime2 = (time2: Date) => {
        console.log('Time: ', time2)
        this.setState({ time2 })
    }
    handleattributes({ target }) {
        console.log(target.value);
        this.setState({
            [target.name]: target.value
        });
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    selectRates() {
        this.setState({ show_tab: true });
    }
    //render start******************************************************
    render() {
        const { classes } = this.props;
        const { date1, time1, date2, time2 } = this.state
        return (
            <div>
                {/* <PanelHeader size="sm" /> */}
                <div className="container-fluid">
                    <Row className="carousel-container">
                        <Col md={12} xs={12}>
                            <Card body outline className="text-center" color="danger">
                                <div id="slide1">
                                    <Carousel>
                                        <div>
                                            <img src={n1} />
                                            <p className="legend">To comfort you</p>
                                        </div>
                                        <div>
                                            <img src={n2} />
                                            <p className="legend">Take you to your dream places</p>
                                        </div>
                                        <div>
                                            <img src={n3} />
                                            <p className="legend">Make your home</p>
                                        </div>
                                    </Carousel>
                                </div>
                            </Card>
                        </Col>
                    </Row>

                    {!this.state.show_tab && <Row>
                        <Col md={12} xs={12}>
                            <CardGroup>
                                <Card body className="text-center" style={{ backgroundColor: '#FAFAFA', borderColor: '#333' }}>
                                    <div className="card-content">
                                        <CardHeader>
                                            <h5 className="title">
                                                {" "}
                                                Find the best prices rates for Cruises for {this.state.destination}{" "}
                                            </h5>
                                        </CardHeader>
                                        <CardBody>
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">Select Destination: </Label>
                                                            <Input type="select" name="destination" id="exampleSelect" onChange={this.handleDesSelect}>
                                                                <option name="destination" value="" onSelected={this.handleDesSelect}>Select Destination</option>
                                                                <option name="destination" value="Africa" onSelected={this.handleDesSelect}>Africa</option>
                                                                <option name="destination" value="Alaska" onSelected={this.handleDesSelect}>Alaska</option>
                                                                <option name="destination"value="Asia" onSelected={this.handleDesSelect}>Asia</option>
                                                                <option name="destination" value="Australia" onSelected={this.handleDesSelect}>Australia / New Zealand</option>
                                                                <option name="destination" value="Bahamas" onSelected={this.handleDesSelect}>Bahamas</option>
                                                                <option name="destination" value="Bermuda" onSelected={this.handleDesSelect}>Bermuda</option>
                                                                <option name="destination" value="Canada - New England" onSelected={this.handleDesSelect}>Canada - New England</option>
                                                                <option name="destination"value="Caribbean" onSelected={this.handleDesSelect}>Caribbean</option>
                                                                <option name="destination"value="Caribbean - Eastern" onSelected={this.handleDesSelect}>Caribbean - Eastern</option>
                                                                <option name="destination" value="Caribbean - Southern" onSelected={this.handleDesSelect}>Caribbean - Southern</option>
                                                                <option name="destination" value="Caribbean - Western" onSelected={this.handleDesSelect}>Caribbean - Western</option>
                                                                <option name="destination" value="Europe" onSelected={this.handleDesSelect}>Europe</option>
                                                                <option name="destination" value="Hawaii" onSelected={this.handleDesSelect}>Hawaii</option>
                                                                <option name="destination" value="Mediterranean" onSelected={this.handleDesSelect}>Mediterranean</option>
                                                                <option name="destination" value="Mediterranean - Eastern" onSelected={this.handleDesSelect}>Mediterranean - Eastern</option>
                                                                <option name="destination" value="Mediterranean - Western" onSelected={this.handleDesSelect}>Mediterranean - Western</option>
                                                                <option name="destination" value="Mexico" onSelected={this.handleDesSelect}>Mexico</option>
                                                                <option name="destination" value="Nowhere (no port stops)" onSelected={this.handleDesSelect}>Nowhere (no port stops)</option>
                                                                <option name="destination" value="Panama Canal" onSelected={this.handleDesSelect}>Panama Canal</option>
                                                                <option name="destination" value="South America" onSelected={this.handleDesSelect}>South America</option>
                                                                <option name="destination" value="South Pacific" onSelected={this.handleDesSelect}>South Pacific</option>
                                                                <option name="destination" value="Transatlantic" onSelected={this.handleDesSelect}>Transatlantic</option>
                                                                <option name="destination" value="United States" onSelected={this.handleDesSelect}>United States &amp; Canada</option>
                                                                <option name="destination" value="US Pacific Coast" onSelected={this.handleDesSelect}>US Pacific Coast</option>
                                                                <option name="destination" value="World" onSelected={this.handleDesSelect}>World</option>
                                                            </Input>
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">Length of Cruise: </Label>
                                                            <Input type="select" name="legnth" id="exampleSelect">
                                                                <option>Any Length in Nights</option>
                                                                <option value="1">1-2 nights</option>
                                                                <option value="2">3-6 nights</option>
                                                                <option value="3">7-9 nights</option>
                                                                <option value="4">10-14 nights</option>
                                                            </Input>
                                                        </FormGroup>

                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">Departure Month: </Label>
                                                            <Input type="select" name="month" id="exampleSelect">
                                                                <option>Select Month: </option>
                                                                <option value="1">January</option>
                                                                <option value="2">February</option>
                                                                <option value="3">March</option>
                                                                <option value="4">April</option>
                                                                <option value="5">May</option>
                                                                <option value="6">June</option>
                                                                <option value="7">July</option>
                                                                <option value="8">August</option>
                                                                <option value="9">September</option>
                                                                <option value="10">October</option>
                                                                <option value="11">November</option>
                                                                <option value="12">December</option>
                                                            </Input>
                                                        </FormGroup>
                                                    </div>

                                                    <div className="col-md-5">
                                                    <FormGroup>
                                                            <Label for="exampleSelect">Year: </Label>
                                                            <Input type="select" name="year" id="exampleSelect">
                                                                <option>Select year: </option>
                                                                <option value="2018">2018</option>
                                                                <option value="2019">2019</option>
                                                                <option value="2020">2020</option>
                                                                <option value="2021">2021</option>
                                                                <option value="2022">2022</option>
                                                            </Input>
                                                        </FormGroup>
                                                    </div>
                                                    <br />
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        
                                                    </div>
                                                </div>

                                                <ButtonGroup className="pull-right">
                                                    <Button
                                                        outline
                                                        color="primary"
                                                        size="lg"
                                                        onClick={this.clear}
                                                    >
                                                        Clear
                          </Button>
                                                </ButtonGroup>

                                                <h3>
                                                    {" "}
                                                    <Badge color="info">{this.state.message}</Badge>
                                                </h3>
                                            </form>
                                        </CardBody>
                                    </div>
                                </Card>
                                <Card className="text-center" style={{ backgroundColor: '#FAFAFA', borderColor: '#333' }}>
                                    <div className="card-content">
                                        <CardHeader>
                                            <h5 className="title">
                                                Click on multiple Cruise sites to get the lowest prices
                      </h5>
                                        </CardHeader>
                                        <CardBody>
                                            {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                                            {/* <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.</CardText> */}

                                            <FormGroup>
                                                <div>
                                                    <span className="carlogo">

                                                        <Switch
                                                            checked={this.state.check_autowire}
                                                            onChange={this.handleChangeSwitch('check_autowire')}
                                                            value="check_autowire"
                                                            color="primary"
                                                        />
                                                        <img
                                                            className="carlogo-size"
                                                            src={img_autorent}
                                                            alt="fireSpot"
                                                        />
                                                    </span>
                                                    <span className="carlogo">
                                                        {"               "}
                                                        <Switch
                                                            checked={this.state.check_trip}
                                                            onChange={this.handleChangeSwitch('check_trip')}
                                                            value="check_trip"
                                                            color="primary"
                                                        />
                                                        {"  "}
                                                        <img
                                                            className="carlogo-size"
                                                            src={img_trip}
                                                            alt="fireSpot"
                                                        />
                                                    </span>
                                                    <span className="carlogo">
                                                        {" "}
                                                        <Switch
                                                            checked={this.state.check_kayak}
                                                            onChange={this.handleChangeSwitch('check_kayak')}
                                                            value="check_kayak"
                                                            color="primary"
                                                        />
                                                        <img
                                                            className="carlogo-size"
                                                            src={img_kaya}
                                                            alt="fireSpot"
                                                        />
                                                    </span>
                                                    <span className="carlogo">
                                                        {" "}
                                                        <Switch
                                                            checked={this.state.check_hot}
                                                            onChange={this.handleChangeSwitch('check_hot')}
                                                            value="check_hot"
                                                            color="primary"
                                                        />
                                                        <img
                                                            className="carlogo-size"
                                                            src={img_hot}
                                                            alt="fireSpot"
                                                        />
                                                    </span>
                                                </div>
                                            </FormGroup>
                                            <Button
                                                color="primary"
                                                size="lg"
                                                onClick={this.selectRates}
                                            >
                                                Compare Selected
                      </Button>
                                        </CardBody>
                                    </div>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>}
                    <Row>
                        <Col md={12} xs={12}>
                            {this.state.show_tab && (
                                <Card className="text-center" body className="text-center">
                                    <div className="card-content">
                                        <CardHeader>
                                            <h5 className="title">Cruises</h5>


                                        </CardHeader>


                                        <CardBody>
                                            <Button color="primary" size="sm" onClick={this.goBack}>Go Back</Button>{' '}
                                            <div>
                                                <Nav tabs>
                                                    {this.state.check_autowire && <NavItem>
                                                        <NavLink
                                                            className={classnames({
                                                                active: this.state.activeTab === "1"
                                                            })}
                                                            onClick={() => {
                                                                this.toggle("1");
                                                            }}
                                                        >
                                                            Orbitz
                            </NavLink>
                                                    </NavItem>}
                                                    {this.state.check_trip && <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: this.state.activeTab === '2' })}
                                                            onClick={() => { this.toggle('2'); }}
                                                        >
                                                            Avoya Travels
         </NavLink>
                                                    </NavItem>}
                                                    {this.state.check_kayak && <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: this.state.activeTab === '3' })}
                                                            onClick={() => { this.toggle('3'); }}
                                                        >
                                                            Expedia
         </NavLink>
                                                    </NavItem>}
                                                    {this.state.check_hot && <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: this.state.activeTab === '4' })}
                                                            onClick={() => { this.toggle('4'); }}
                                                        >
                                                            Cruise.com
         </NavLink>
                                                    </NavItem>}
                                                </Nav>
                                                <TabContent activeTab={this.state.activeTab}>
                                                    {this.state.check_autowire && <TabPane tabId="1">
                                                        <Row>
                                                            <Col sm="4">
                                                                {/* <Card > */}
                                                                <CardTitle>Alcmene</CardTitle>
                                                                <CardText>Availablility: 6000<br/>
                                                                    Price per head: RS 3000.00
                                                                </CardText>
                                                                <CardImg top width="100%" src={car1} alt="Card image cap" />
                                                                <Button bsSize="small">Book Now</Button>
                                                                {/* </Card> */}
                                                            </Col>
                                                            <Col sm="4">

                                                                <CardTitle>Bermuda</CardTitle>
                                                                <CardText>Availablility: 4000<br/>
                                                                    Price per head: RS 4500.00
                                                                </CardText>
                                                                <CardImg top width="100%" src={car2} alt="Card image cap" />
                                                                <Button bsSize="small">Book Now</Button>

                                                            </Col>
                                                        </Row>
                                                    </TabPane>}
                                                    {this.state.check_trip &&
                                                        <TabPane tabId="2">
                                                            <Row>
                                                                <Col sm="4">
                                                                    {/* <Card > */}
                                                                    <CardTitle>Kia F6</CardTitle>
                                                                    <CardText>44$ per hour</CardText>
                                                                    <CardImg top width="100%" src={car3} alt="Card image cap" />

                                                                    {/* </Card> */}
                                                                </Col>
                                                                <Col sm="4">

                                                                    <CardTitle>Benze G8</CardTitle>
                                                                    <CardText>100$ per hour</CardText>
                                                                    <CardImg top width="100%" src={car4} alt="Card image cap" />


                                                                </Col>
                                                            </Row>
                                                        </TabPane>
                                                    }

                                                    {this.state.check_kayak && <TabPane tabId="3">
                                                        <Row>
                                                            <Col sm="4">
                                                                {/* <Card > */}
                                                                <CardTitle>Chavorlet</CardTitle>
                                                                <CardText>50$ per hour</CardText>
                                                                <CardImg top width="100%" src={car5} alt="Card image cap" />

                                                                {/* </Card> */}
                                                            </Col>
                                                            <Col sm="4">

                                                                <CardTitle>Toyota Premier</CardTitle>
                                                                <CardText>80$ per hour</CardText>
                                                                <CardImg top width="100%" src={car6} alt="Card image cap" />


                                                            </Col>
                                                        </Row>
                                                    </TabPane>
                                                    }
                                                    {this.state.check_hot && <TabPane tabId="4">
                                                        <Row>
                                                            <Col sm="4">
                                                                {/* <Card > */}
                                                                <CardTitle>Toyota Hut</CardTitle>
                                                                <CardText>63$ per hour</CardText>
                                                                <CardImg top width="100%" src={car7} alt="Card image cap" />

                                                                {/* </Card> */}
                                                            </Col>
                                                            <Col sm="4">

                                                                <CardTitle>Mazda L2</CardTitle>
                                                                <CardText>60$ per hour</CardText>
                                                                <CardImg top width="100%" src={car8} alt="Card image cap" />


                                                            </Col>
                                                        </Row>
                                                    </TabPane>
                                                    } </TabContent>
                                            </div>
                                        </CardBody>
                                    </div>
                                </Card>
                            )}
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Cruises;
