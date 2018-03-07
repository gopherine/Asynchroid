import React from 'react';
import Link from 'next/link';
import classes from '../styles/style.scss';

const errorPage=()=>{
    const errorClass=`card ${classes.error}`;
    return (
    <div className={errorClass}>
        <p className="h1">404</p>
        <p className="h2">Oops, something went wrong</p>
        <p className="lead">Try <Link href="/"><a>going back</a></Link>.</p>
    </div>
    );
};

export default errorPage;