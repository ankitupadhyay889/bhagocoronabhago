import React from 'react';
import { NavLink } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className="Op">
            <h1> 404 Error Page </h1>
            <br />
            <NavLink to="/"> Go Back </NavLink>
        </div>
    );
};

export default Notfound;