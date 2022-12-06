import React from 'react';
import Banner from './Banner/Banner';
import ElectricDealership from './ElectricDealerShip/ElectricDealership';
import ElectricDealerShip2 from './ElectricDealerShip/ElectricDealerShip2';
import WhyUs from './WhyUs/WhyUs';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            {/* Why chose us */}
            <WhyUs></WhyUs>
            {/* Electric Dealership */}
            <ElectricDealership></ElectricDealership>
            {/* Electric Dealership */}
            <ElectricDealerShip2></ElectricDealerShip2>
        </div>
    );
};

export default Home;