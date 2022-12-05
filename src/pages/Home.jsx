import React, { Fragment } from 'react';
import Choose from '../components/Choose/Choose';
import Download from '../components/Download/Download';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import MenuPack from '../components/MenuPack/MenuPack';
import PopularMenu from '../components/PopularMenu/PopularMenu';
import Testimonial from '../components/Testimonial/Testimonial';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <HeroSlider />
            <PopularMenu />
            <Choose />
            <MenuPack />
            <Testimonial />
            <Download />
            <Footer />
        </Fragment>

    );
};

export default Home;