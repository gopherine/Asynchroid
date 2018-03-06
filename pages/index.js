import React from 'react';
import Link from 'next/link';
import MainNav from '../components/Navbars/MainNav';
import Head from 'next/head';
import FaAdjust from 'react-icons/lib/fa/adjust';


const indexPage=()=>(
<div>
    <Head>
      <title>Speech Blog</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <MainNav/>
    <FaAdjust/>
    <p>Go to <Link href="/auth"><a>Auth</a></Link> </p>
</div>
);

export default indexPage;