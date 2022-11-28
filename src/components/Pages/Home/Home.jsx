import React from 'react';
import AllCategories from '../Category/AllCategories';
import AdvertisedItems from './AdvertisedItems';
import Banner from './Banner';
import Team from './Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllCategories></AllCategories>
            <AdvertisedItems></AdvertisedItems>
            <Team></Team>
        </div>
    );
};

export default Home;