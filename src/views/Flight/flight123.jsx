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
import img_autorent from "../../assets/logos/Cruise1.png";
import img_trip from "../../assets/logos/trip.png";
import img_kaya from "../../assets/logos/kaya.png";
import img_hot from "../../assets/logos/Cruise2.png";
import "react-datepicker/dist/react-datepicker.css";
import car1 from "../../assets/img/sl.png";
import car2 from "../../assets/img/emi.png";
import car3 from "../../assets/img/airn.png";
import car4 from "../../assets/img/airbu.png";
import car5 from "../../assets/img/qa.png";
import car6 from "../../assets/img/th.jpg";
import car7 from "../../assets/img/sin.png";
import car8 from "../../assets/img/eva.png";
import n1 from "../../assets/img/adf.jpg";
import n2 from "../../assets/img/dea.jpg";
import n3 from "../../assets/img/dcn.jpg";
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

class Cars extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: "",
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
            PackageType: null,
            From: null,
            To: null,
            Depart: null,
            arrival: false,
            travelers: null
        };

        //this.handleDate = this.handleDate.bind(this);
        this.handleattributes = this.handleattributes.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.selectRates = this.selectRates.bind(this);
        this.goBack = this.goBack.bind(this);
        // this.clear=this.clear.bind(this);
        // this.check=this.check.bind(this);
        // checkerror=this.checkerror.bind(this);
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
                                                Find the Chepeast Flights From {this.state.city}{" "}
                                            </h5>
                                        </CardHeader>
                                        <CardBody>
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">
                                                                Package Type
                              </Label>
                                                            <Input
                                                                type="select"
                                                                name="PackageType"
                                                                id="PackageType"
                                                                onClick={this.handleattributes}
                                                                value={this.state.PackageType}

                                                            >
                                                                <option >Package type</option>
                                                                <option value="one"   >One way</option>
                                                                <option value="round"   >Round Trip</option>


                                                            </Input>
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">
                                                                From
                              </Label>
                                                            <Input
                                                                type="select"
                                                                name="city"
                                                                id="city"
                                                                onClick={this.handleattributes}
                                                                value={this.state.city}

                                                            >
                                                                <option>From</option>
                                                                <option value="colombo" onSelected={this.handleattributes} >Colombo, Sri Lanka (CMB)</option>
                                                                <option value="San_Francisco" onSelected={this.handleattributes}  >San Francisco, CA (SFO)</option>
                                                                <option value="Newyork" onSelected={this.handleattributes}>New York City Airports (NYC)</option>

                                                            </Input>
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">
                                                                To
                              </Label>
                                                            <Input
                                                                type="select"
                                                                name="city"
                                                                id="city"
                                                                onClick={this.handleattributes}
                                                                value={this.state.city}

                                                            >
                                                                <option>To</option>
                                                                <option value="colombo" onSelected={this.handleattributes} >Colombo, Sri Lanka (CMB)</option>
                                                                <option value="San_Francisco" onSelected={this.handleattributes}  >San Francisco, CA (SFO)</option>
                                                                <option value="Newyork" onSelected={this.handleattributes}>New York City Airports (NYC)</option>

                                                            </Input>

                                                        </FormGroup>

                                                    </div>
                                                </div>
                                                

                                              

                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">DEparture</Label>

                                                            <DateFormatInput name='date-input' value={date1} onChange={this.onChangeDate1} />
                                                            <br />
                                                            <TimeFormatInput name='time-input' value={time1} onChange={this.onChangeTime1} />
                                                        </FormGroup>
                                                    </div>

                                                    <div className="col-md-5">
                                                        <FormGroup>
                                                            <Label for="exampleSelect">Return</Label>

                                                            <DateFormatInput name='date-input2' value={date2} onChange={this.onChangeDate2} />
                                                            <br />

                                                            <TimeFormatInput name='time-input2' value={time2} onChange={this.onChangeTime2} />

                                                        </FormGroup>
                                                    </div>
                                                    <br />
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                    <FormGroup>
                                                    <Label for="exampleSelect">Travelers</Label>
                                                    <Input type="select" name="select" id="exampleSelect">
                                                      <option>1</option>
                                                      <option>2</option>
                                                      <option>3</option>
                                                      <option>4</option>
                      
                                                    </Input>
                                                  </FormGroup>
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
                                                Click on multiple sites to get the lowest prices 
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
                                                color="DarkBlack"
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
                                            <h5 className="title">Flights</h5>


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
                                                       Avoya  Travels
                            </NavLink>
                                                    </NavItem>}
                                                    {this.state.check_trip && <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: this.state.activeTab === '2' })}
                                                            onClick={() => { this.toggle('2'); }}
                                                        >
                                                            TripAdvisor
         </NavLink>
                                                    </NavItem>}
                                                    {this.state.check_kayak && <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: this.state.activeTab === '3' })}
                                                            onClick={() => { this.toggle('3'); }}
                                                        >
                                                            Kayak
         </NavLink>
                                                    </NavItem>}
                                                    {this.state.check_hot && <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: this.state.activeTab === '4' })}
                                                            onClick={() => { this.toggle('4'); }}
                                                        >
                                                            Expedia
         </NavLink>
                                                    </NavItem>}
                                                </Nav>
                                                <TabContent activeTab={this.state.activeTab}>
                                                    {this.state.check_autowire && <TabPane tabId="1">
                                                        <Row>
                                                            <Col sm="4">
                                                                {/* <Card > */}
                                                                <CardTitle>Srilankan Airlines</CardTitle>
                                                                <CardText>40$ Per Head</CardText>
                                                                <CardImg top width="100%" src={car1} alt="Card image cap" />
                                                                <Button color="Black" size="lg" >
                            Book Now
                        </Button>

                                                                {/* </Card> */}
                                                            </Col>
                                                            <Col sm="4">

                                                                <CardTitle>Emirates Dubai</CardTitle>
                                                                <CardText>60$ per Head</CardText>
                                                                <CardImg top width="100%" src={car2} alt="Card image cap" />
                                                                <Button color="Black" size="lg" >
                            Book Now
                        </Button>


                                                            </Col>
                                                        </Row>
                                                    </TabPane>}
                                                    {this.state.check_trip &&
                                                        <TabPane tabId="2">
                                                            <Row>
                                                                <Col sm="4">
                                                                    {/* <Card > */}
                                                                    <CardTitle>Air India</CardTitle>
                                                                    <CardText>44$ per Head</CardText>
                                                                    <CardImg top width="100%" src={car3} alt="Card image cap" />
                                                                    <Button color="Black" size="lg" >
                            Book Now
                        </Button>

                                                                    {/* </Card> */}
                                                                </Col>
                                                                <Col sm="4">

                                                                    <CardTitle>Air Bus</CardTitle>
                                                                    <CardText>100$ per Head</CardText>
                                                                    <CardImg top width="100%" src={car4} alt="Card image cap" />
                                                                    <Button color="Black" size="lg" >
                            Book Now
                        </Button>


                                                                </Col>
                                                            </Row>
                                                        </TabPane>
                                                    }

                                                    {this.state.check_kayak && <TabPane tabId="3">
                                                        <Row>
                                                            <Col sm="4">
                                                                {/* <Card > */}
                                                                <CardTitle>Qatar AirWays</CardTitle>
                                                                <CardText>50$ per Head</CardText>
                                                                <CardImg top width="100%" src={car5} alt="Card image cap" />
                                                                <Button color="Black" size="lg" >
                            Book Now
                        </Button>

                                                                {/* </Card> */}
                                                            </Col>
                                                            <Col sm="4">

                                                                <CardTitle>Thai Airways</CardTitle>
                                                                <CardText>80$ per Head</CardText>
                                                                <CardImg top width="100%" src={car6} alt="Card image cap" />
                                                                <Button color="Black" size="lg" >
                            Book Now
                        </Button>


                                                            </Col>
                                                        </Row>
                                                    </TabPane>
                                                    }
                                                    {this.state.check_hot && <TabPane tabId="4">

                                                        <Row>
                                                            <Col sm="4">
                                                                {/* <Card > */}
                                                                <CardTitle>Singapore Airways </CardTitle>
                                                                <CardText>63$ per Head</CardText>
                                                                <CardImg top width="100%" src={car7} alt="Card image cap" />
                                                                <Button color="Black" size="lg" >
                            Book Now
                        </Button>

                                                                {/* </Card> */}
                                                            </Col>
                                                            <Col sm="4">

                                                                <CardTitle>Eva Air</CardTitle>
                                                                <CardText>60$ per hour</CardText>
                                                                <CardImg top width="100%" src={car8} alt="Card image cap" />
                                                                <Button color="Black" size="lg" >
                            Book Now
                        </Button>


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

export default Cars;
