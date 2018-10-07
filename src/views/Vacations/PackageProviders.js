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
// import '../../assets/css/checkboxStyles.css'
import HeadingStyle1 from '../../assets/css/Headings1.css'
import moment from "moment/moment";
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

class PackageProviders extends React.Component {
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


    goBack(){
        this.setState({show_tab:false})
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


    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
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
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default PackageProviders;
