import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Freebook from '../components/Freebook';
import Freebook2 from '../components/Freebook2';

function Home() {
  return (
    <>
    <Navbar />
    <Banner />
    {/* <Freebook /> */}
    <Freebook2 />
    <Footer />
    </>
  );
}

export default Home