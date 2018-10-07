import React, { Component } from 'react';
import VacationFinder from "./VacationFinder";
import { Container } from 'reactstrap';
import PackageProviders from "./PackageProviders";
import Members from "./Members";
import CustomFilter from "./CustomFilter";
import 'bootstrap/dist/css/bootstrap.css';
import NavigationPane from "./NavigationPane";
import 'bootstrap/dist/css/bootstrap.css';
class Vacations extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <VacationFinder/>
                        <div className="row"><br/></div>
                        <Members/>
                        <div className="row"><br/></div>
                    </div>
                    <div className="row"><br/></div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <PackageProviders/>
                        <div className="row"><br/></div>
                        <CustomFilter/>
                    </div>
                </div>
                <div className="row"><br/></div>
                <Container>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <NavigationPane/>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Vacations;