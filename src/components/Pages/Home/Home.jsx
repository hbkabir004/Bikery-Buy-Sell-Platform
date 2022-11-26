import React from 'react';
import AllCategories from '../Category/AllCategories';
import Banner from './Banner';
import Team from './Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllCategories></AllCategories>
            <Team></Team>
        </div>
    );
};

export default Home;