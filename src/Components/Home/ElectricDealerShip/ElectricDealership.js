import React from 'react';
import women from '../../../Asssets/women.jpg';
import sign from '../../../Asssets/sign.jpg';
import { BiRightArrowAlt } from 'react-icons/bi';

const ElectricDealership = () => {
    return (
        <div className='mx-5' style={{ "padding": "10%" }}>
            <div className="card mb-3" style={{ "max-width": "100%" }}>
                <div className="row g-0 d-flex justify-content-around">
                    <div className="col-md-4">
                        <img src={women} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <p className='myTextColor text-start ms-5'>Electric Dealership -----<BiRightArrowAlt /></p>
                        <div className="card-body text-start ms-4 mt-2">
                            <h1 className="card-title"> <b> The world's most <br /> Latest Electric <span className='myTextColor'>Dealership</span> </b></h1>
                            <p className="card-text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Odio illum distinctio laboriosam consequuntur voluptates blanditiis quis <br /> praesentium sunt doloremque nobis officia soluta <br /> fugiat ipsa asperiores, dolorum eos commodi cum iste. </p>
                            <p className="card-text">  Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Odio illum distinctio laboriosam consequuntur voluptates blanditiis quis <br /> praesentium sunt doloremque nobis officia soluta <br /> fugiat ipsa asperiores, dolorum eos commodi cum iste.</p>
                        </div>
                        <div className='d-flex ms-4 '>
                            <img src={sign} alt="" style={{ "width": "30%" }} />
                            <div>
                                <h1>Antonyyyyyyy</h1>
                                <p className='text-start'><small>Ceoo</small></p>
                            </div>
                        </div>
                        <button className='btn btn-dark d-flex mb-2 ms-4  justify-content-start align-items-center'>Explore More<BiRightArrowAlt /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElectricDealership;