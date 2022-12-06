import React from 'react';
import car from '../../../Asssets/car.jpg'
import { IoLogoGooglePlaystore } from 'react-icons//io5';
import { AiFillApple } from 'react-icons/ai';

const Banner = () => {
    return (
        <div className='d-flex justify-content-around p-3'>
            <div>
                <h1 className='' style={{ "margin-top": "10vw" }}>
                    <b>
                        We believed  travel <br />
                        don't <span className='myTextColor'>destruction</span> <br />
                        the earth
                    </b>

                </h1>
                <p>We have more than 40000 cars available</p>
                <div>

                    <button className='bg-success text-white border-white'>
                        <IoLogoGooglePlaystore />
                        Get it on <br />
                        <b>Google Play</b>
                    </button>
                    <button className='bg-dark text-white border-white'>
                        <AiFillApple />
                        Download on <br />
                        <b>App store</b>
                    </button>
                </div>
            </div>
            <div>
                <img src={car} alt="" />
            </div>
        </div>
    );
};

export default Banner;