import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return ( 
        <div>
            <h2>Sorry</h2>
            <p>Not Found</p>
            <Link to='/'> Page not found back to the homepage</Link> 

        </div>
        );
}

export default NotFound;