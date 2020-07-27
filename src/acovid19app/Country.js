import React, { Component } from 'react'

export default class Country extends Component {
    render() {

        const {countries} = this.props;

        return (
            
            <tr>
                <td>{countries.Country}</td>
                <td>{countries.TotalConfirmed}</td>
                <td>{countries.NewConfirmed}</td>
                <td>{countries.TotalRecovered}</td>
                <td>{countries.TotalDeaths}</td>
            </tr>
            
        )
    }
}
