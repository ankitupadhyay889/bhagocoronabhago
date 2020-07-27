import React, { Component } from 'react'

export default class Data extends Component {
    render() {
        const {summary , currentDate} = this.props;
        return (
            <div className="row">

                <div className="new">
                    <h3>New Confirmed</h3>
                    <h1> {summary.NewConfirmed} </h1>
                    <h4> {new Date(currentDate).toDateString()} </h4>
                </div>

                <div className="total">
                    <h3>Total Confirmed</h3>
                    <h1> {summary.TotalConfirmed} </h1>
                    <h4> {new Date(currentDate).toDateString()} </h4>
                </div>

                <div className="death">
                    <h3>New Deaths</h3>
                    <h1> {summary.NewDeaths} </h1>
                    <h4> {new Date(currentDate).toDateString()} </h4>
                </div>

                <div className="todeath">
                    <h3>Total Deaths</h3>
                    <h1> {summary.TotalDeaths} </h1>
                    <h4> {new Date(currentDate).toDateString()} </h4>
                </div>

                <div className="recove">
                    <h3>Total Recovered</h3>
                    <h1> {summary.TotalRecovered} </h1>
                    <h4> {new Date(currentDate).toDateString()} </h4>
                </div>

            </div>
        )
    }
}
