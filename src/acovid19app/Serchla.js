import React, { Component } from 'react';

import axios from "axios";

import Data from "./Data";

import Country from "./Country";

export default class Front extends Component {

    state = {
        countries : [],
        global : [],
        currentDate : null,
        loading : true
    }

    async componentDidMount(){
        const res = await axios.get("https://api.covid19api.com/summary");
        console.log(res);
        this.setState({countries : res.data.Countries});
        this.setState({global : res.data.Global});
        this.setState({currentDate : res.data.Date});
        this.setState({loading : false});
    }

    render() {
        if(this.state.loading){
            return<h1> Loading... </h1>
        }
        return (
            <div className ="ser">
                <Data summary = {this.state.global} currentDate = {this.state.currentDate} />

                <table>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Total Cases</th>
                            <th>New Cases</th>
                            <th>Total Recovered</th>
                            <th>Total Deaths</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.countries.map(country => (
                            <Country countries = {country} key = {country.Country} />
                        ))}
                    </tbody>
                </table>

            </div>
        )
    }
}
