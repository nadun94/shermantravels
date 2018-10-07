import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactTooltip from 'react-tooltip';

class ToolTipSet extends React.Component {




    render() {


        return (
            <React.Fragment>
            <ReactTooltip id='arrivalTip' type='warning' effect='solid'>
                    <span> Select Arrival Date</span>
            </ReactTooltip>
            <ReactTooltip id='departureTip' type='warning' effect='solid'>
                <span>Select Departure Date</span>
            </ReactTooltip>
            <ReactTooltip id='daysTip' type='warning' effect='solid'>
                    <span>Enter number of days of Stay</span>
            </ReactTooltip>
            <ReactTooltip id='MonthsTip' type='warning' effect='solid'>
                    <span>Enter number of months of Stay</span>
            </ReactTooltip>
            <ReactTooltip id='destinationTip' type='warning' effect='solid'>
                    <span> Select Destination here</span>
            </ReactTooltip>
                <ReactTooltip id='kidsTip' type='warning' effect='solid'>
                    <span>Enter total number of kids here</span>
                </ReactTooltip>
                <ReactTooltip id='adultsTip' type='warning' effect='solid'>
                    <span>Enter total number of adults here</span>
                </ReactTooltip>
                <ReactTooltip id='under3Tip' type='warning' effect='solid'>
                    <span>Enter number of kids under 3 yrs here</span>
                </ReactTooltip>
                <ReactTooltip id='under12Tip' type='warning' effect='solid'>
                    <span>Enter number of kids aged 3-12 yrs here</span>
                </ReactTooltip>
                <ReactTooltip id='MinBudgetTip' type='warning' effect='solid'>
                    <span>Enter Minimum Budget here</span>
                </ReactTooltip>
                <ReactTooltip id='MaxBudgetTip' type='warning' effect='solid'>
                    <span>Enter Maximum Budget here</span>
                </ReactTooltip>

                <ReactTooltip id='PackageProviderTip' type='warning' effect='solid'>
                    <span>Select Package Providers to compare vacation Packages</span>
                </ReactTooltip>

                <ReactTooltip id='VacationButtonTip' type='warning' effect='solid'>
                    <span>Click to save Vacation Details</span>
                </ReactTooltip>
                <ReactTooltip id='MemberButtonTip' type='warning' effect='solid'>
                    <span>Click to save Member Details</span>
                </ReactTooltip>
                <ReactTooltip id='CompareSearchButtonTip' type='warning' effect='solid'>
                    <span>Click to Compare and Serach for Vacation Packages</span>
                </ReactTooltip>
                <ReactTooltip id='FilterSearchButtonTip' type='warning' effect='solid'>
                    <span> Click to filter by Price or Rating</span>
                </ReactTooltip>
                <ReactTooltip id='StarsTip' type='warning' effect='solid'>
                    <span>Click oN Stars to select Rating</span>
                </ReactTooltip>
            </React.Fragment>
        );
    }
}

export default ToolTipSet;