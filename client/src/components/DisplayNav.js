// 5/17 - Henry - Added a navigation component to show up at the top of every other component, i.e. "page". Jessica is working on the React side but I wanted to include this code just in case I need it to test the backend/login and registration. We still need to do styling (Alexandra).

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const DisplayNav = (props) => {

    const location = useLocation()

    if(location.pathname === "/" || location.pathname === "/register") {
    return null
    }

    return (
        <div>
            <h1>Get Out</h1>
            <p>Your next outdoor adventure awaits. Share it with your family and friends.</p>
        </div>
    );
}

export default DisplayNav;
