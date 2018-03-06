import React from 'react';
import Link from 'next/link';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import MainNav from '../components/Navbars/MainNav';


const indexPage=()=>(
<div>
    <MainNav/>
    <p>Go to <Link href="/auth"><a>Auth</a></Link> </p>
</div>
);

export default indexPage;