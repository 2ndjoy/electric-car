import React from 'react';
import { Card } from 'react-bootstrap';

const WhyUs = () => {
    return (
        <div className='my-3'>
            <div className='d-flex justify-content-center gap-5'>
                <div>
                    <div>
                        <p className='myTextColor text-end'>
                            ---------- Why Choose us
                        </p>
                        <h1 className='text-end'>
                            <b>
                                Why us <br />
                                Electric Vehicle
                            </b>
                        </h1>
                    </div>
                </div>
                <div className='mt-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur <br /> ab id ducimus modi voluptate non similique labore aliquam cum, <br /> sunt natus architecto ea dolorem vel veniam fugiat harum quidem ad!
                </div>
            </div>
            <div className='d-flex justify-content-center mx-auto gap-4 mt-4'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='text-start'>Ev charging</Card.Title>

                        <Card.Text className='text-start'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='text-start'>Affordable Price</Card.Title>

                        <Card.Text className='text-start'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='text-start'>Charge Points </Card.Title>

                        <Card.Text className='text-start'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='text-start'>Nature Friendly</Card.Title>

                        <Card.Text className='text-start'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default WhyUs;