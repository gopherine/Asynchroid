import React from 'react';
import './_error.css';

const errorPage=()=>{
    return (
    <div className="error card">
        <p className="h1">404</p>
        <p className="h2">Oops, something went wrong</p>
        <p className="lead">Try <a>going back</a>.</p>
    </div>
    );
};

export default errorPage;