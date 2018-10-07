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
import img_autorent from "../../assets/logos/autorentals.png";
import img_trip from "../../assets/logos/trip.png";
import img_kaya from "../../assets/logos/kaya.png";
import img_hot from "../../assets/logos/hot.png";
import "react-datepicker/dist/react-datepicker.css";
import car1 from "../../assets/img/car1.png";
import car2 from "../../assets/img/car2.png";
import car3 from "../../assets/img/car3.png";
import car4 from "../../assets/img/car4.png";
import car5 from "../../assets/img/car5.png";
import car6 from "../../assets/img/car6.png";
import car7 from "../../assets/img/car7.png";
import car8 from "../../assets/img/car8.png";
import n1 from "../../assets/img/n1.jpg";
import n2 from "../../assets/img/n2.jpg";
import n3 from "../../assets/img/n3.jpg";
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { arrow_back } from '@material-ui/icons';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import StarRatingComponent from 'react-star-rating-component';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    rating: 5
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});
function Transition(props) {
  return <Slide direction="up" {...props} />;
}
class Cars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "Colombo",
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
      open: false,
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

  onStarClick1(nextValue, prevValue, name) {
    this.setState({ rating1: nextValue });
  }
  onStarClick2(nextValue, prevValue, name) {
    this.setState({ rating2: nextValue });
  }
  onStarClick3(nextValue, prevValue, name) {
    this.setState({ rating3: nextValue });
  }
  onStarClick4(nextValue, prevValue, name) {
    this.setState({ rating4: nextValue });
  }
  onStarClick5(nextValue, prevValue, name) {
    this.setState({ rating5: nextValue });
  }
  onStarClick6(nextValue, prevValue, name) {
    this.setState({ rating6: nextValue });
  }
  onStarClick7(nextValue, prevValue, name) {
    this.setState({ rating7: nextValue });
  }
  onStarClick8(nextValue, prevValue, name) {
    this.setState({ rating8: nextValue });
  }



  goBack() {
    this.setState({ show_tab: false })
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
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
    if (this.state.check_kayak === false && this.state.check_autowire === false && this.state.check_hot === false && this.state.check_trip === false) {
      this.handleClickOpen()
    } else {
      this.setState({ show_tab: true });
    }

  }
  //render start******************************************************
  render() {
    const { rating1,rating2,rating3,rating4,rating5,rating6,rating7,rating8 } = this.state;
    const { classes } = this.props;
    const { date1, time1, date2, time2 } = this.state
    return (

      <div>
        <div>
          <Dialog
            open={this.state.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              <h2>{"  Woops!"}</h2>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <h3>Please select one or more service providers to get the lowest rates.</h3>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Okay
    </Button>
            </DialogActions>
          </Dialog>
        </div>
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
                        Find the best rental car rates in {this.state.city}{" "}
                      </h5>
                    </CardHeader>
                    <CardBody>
                      <form>
                        <div className="row">
                          <div className="col-md-5">
                            <FormGroup>
                              <Label for="exampleSelect">
                                Pick-Up Location
                              </Label>
                              <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                              >
                                <option>Colombo, Sri Lanka (CMB)</option>
                                <option>San Francisco, CA (SFO)</option>
                                <option>New York City Airports (NYC)</option>
                                <option>Sydney, Australia (SYD)</option>
                                <option>Denver, CO (DEN)</option>
                                <option>Tokyo Airports (TYO)</option>
                                <option>Berlin Airports (BER)</option>
                                <option>Beijing, China (PEK)</option>
                                <option>London, United Kingdom (LHR)</option>
                                <option>Amsterdam, Netherlands (AMS)</option>
                              </Input>
                            </FormGroup>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-5">
                            {this.state.check_diff && <FormGroup>
                              <Label for="exampleSelect">
                                Drop-Off Location
                              </Label>
                              <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                              >
                                <option>Enter or Select Place</option>
                                <option>Colombo, Sri Lanka (CMB)</option>
                                <option>San Francisco, CA (SFO)</option>
                                <option>New York City Airports (NYC)</option>
                                <option>Sydney, Australia (SYD)</option>
                                <option>Denver, CO (DEN)</option>
                                <option>Tokyo Airports (TYO)</option>
                                <option>Berlin Airports (BER)</option>
                                <option>Beijing, China (PEK)</option>
                                <option>London, United Kingdom (LHR)</option>
                                <option>Amsterdam, Netherlands (AMS)</option>
                              </Input>
                            </FormGroup>}
                            <FormControlLabel
                              control={
                                <Switch
                                  checked={this.state.check_diff}
                                  onChange={this.handleChangeSwitch('check_diff')}
                                  value="check_diff"
                                  color="primary"
                                />
                              }
                              label="Return to different location"
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-5">
                            <FormGroup>
                              <Label for="exampleSelect">Pick-Up</Label>

                              <DateFormatInput name='date-input' value={date1} onChange={this.onChangeDate1} />
                              <br />
                              <TimeFormatInput name='time-input' value={time1} onChange={this.onChangeTime1} />
                            </FormGroup>
                          </div>

                          <div className="col-md-5">
                            <FormGroup>
                              <Label for="exampleSelect">Drop-Off</Label>

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
                              <Label for="exampleSelect">
                                Car Type
                              </Label>
                              <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                              >
                                <option
                                  value="Economy"
                                  data-car-type-id="Economy"
                                >
                                  Economy
                                </option>
                                <option
                                  value="Compact"
                                  data-car-type-id="Compact"
                                >
                                  Compact
                                </option>
                                <option
                                  value="Midsize"
                                  data-car-type-id="Midsize"
                                >
                                  Midsize
                                </option>
                                <option
                                  value="Standard"
                                  data-car-type-id="Standard"
                                >
                                  Standard
                                </option>
                                <option
                                  value="Full-size"
                                  data-car-type-id="Full-size"
                                >
                                  Full-size
                                </option>
                                <option
                                  value="Premium"
                                  data-car-type-id="Premium"
                                >
                                  Premium
                                </option>
                                <option
                                  value="Luxury"
                                  data-car-type-id="Luxury"
                                >
                                  Luxury
                                </option>
                                <option
                                  value="Convertible"
                                  data-car-type-id="Convertible"
                                >
                                  Convertible
                                </option>
                                <option
                                  value="Minivan"
                                  data-car-type-id="Minivan"
                                >
                                  Minivan
                                </option>
                                <option value="SUV" data-car-type-id="SUV">
                                  SUV
                                </option>
                                <option
                                  value="Sports car"
                                  data-car-type-id="Sports car"
                                >
                                  Sportscar
                                </option>
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
                      <h5 className="title">Cars</h5>


                    </CardHeader>


                    <CardBody>
                      <div className="backbut"> <Button color="primary" size="sm" onClick={this.goBack}>Go Back</Button>{' '}</div>
                     
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
                              AutoRentals
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
                              HotWire
         </NavLink>
                          </NavItem>}
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                          {this.state.check_autowire && <TabPane tabId="1">
                            <Row>
                              <Col sm="4">
                                {/* <Card > */}
                                <CardTitle>Honda Civic</CardTitle>
                                <CardText>40$ per hour</CardText>
                                <CardImg top width="100%" src={car1} alt="Card image cap" />
                                <div>
                                  <h6>Rating from state: {rating1}</h6>
                                  <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={rating1}
                                    onStarClick={this.onStarClick1.bind(this)}
                                  />
                                </div>
                                {/* </Card> */}
                              </Col>
                              <Col sm="4">

                                <CardTitle>Mazda G8</CardTitle>
                                <CardText>60$ per hour</CardText>
                                <CardImg top width="100%" src={car2} alt="Card image cap" />
                                <div>
                                  <h6>Rating from state: {rating2}</h6>
                                  <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={rating2}
                                    onStarClick={this.onStarClick2.bind(this)}
                                  />
                                </div>

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
                                  <div>
                                  <h6>Rating from state: {rating3}</h6>
                                  <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={rating3}
                                    onStarClick={this.onStarClick3.bind(this)}
                                  />
                                </div>
                                  {/* </Card> */}
                                </Col>
                                <Col sm="4">

                                  <CardTitle>Benze G8</CardTitle>
                                  <CardText>100$ per hour</CardText>
                                  <CardImg top width="100%" src={car4} alt="Card image cap" />
                                  <div>
                                  <h6>Rating from state: {rating4}</h6>
                                  <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={rating4}
                                    onStarClick={this.onStarClick4.bind(this)}
                                  />
                                </div>

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
                                <div>
                                  <h6>Rating from state: {rating5}</h6>
                                  <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={rating5}
                                    onStarClick={this.onStarClick5.bind(this)}
                                  />
                                </div>
                                {/* </Card> */}

                              </Col>

                              <Col sm="4">

                                <CardTitle>Toyota Premier</CardTitle>
                                <CardText>80$ per hour</CardText>
                                <CardImg top width="100%" src={car6} alt="Card image cap" />

<div>
                                  <h6>Rating from state: {rating6}</h6>
                                  <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={rating6}
                                    onStarClick={this.onStarClick6.bind(this)}
                                  />
                                </div>
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
                                <div>
                                  <h6>Rating from state: {rating7}</h6>
                                  <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={rating7}
                                    onStarClick={this.onStarClick7.bind(this)}
                                  />
                                </div>
                                {/* </Card> */}
                              </Col>
                              <Col sm="4">

                                <CardTitle>Mazda L2</CardTitle>
                                <CardText>60$ per hour</CardText>
                                <CardImg top width="100%" src={car8} alt="Card image cap" />

<div>
                                  <h6>Rating from state: {rating8}</h6>
                                  <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={rating8}
                                    onStarClick={this.onStarClick8.bind(this)}
                                  />
                                </div>
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
