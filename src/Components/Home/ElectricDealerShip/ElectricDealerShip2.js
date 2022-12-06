import React from 'react';
import { Button, Card } from 'react-bootstrap';
import img1 from '../../../Asssets/womenFueling.jpg';
import img2 from '../../../Asssets/charginCar.jpg';
import img3 from '../../../Asssets/two cars.jpg';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

const ElectricDealerShip2 = () => {
    return (
        <div>
            <div className='d-flex justify-content-around'>
                <div>
                    <h1 className='text-start'>We provide best services
                        <br /> for <span className='myTextColor'>Electric vehicle</span>
                    </h1>
                </div>
                <div className='d-flex'>
                    <Button variant="outline-success" style={{ height: '45px', marginRight: "4px", marginTop: "9px" }}><BiLeftArrowAlt /></Button>
                    <Button variant="outline-success" style={{ height: '45px', marginRight: "4px", marginTop: "9px" }}><BiRightArrowAlt /></Button>
                </div>
            </div>

            <div className='d-flex p-5 gap-2 mx-4 my-3 justify-content-center'>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" style={{ height: "15vw" }} src={img1} />
                    <Card.Body>
                        <Card.Title className='text-start'>Home charging</Card.Title>
                        <Card.Text className='text-start'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="outline-success">Explore more<BiRightArrowAlt /></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" style={{ height: "15vw" }} src={img2} />
                    <Card.Body>
                        <Card.Title className='text-start'>Public Stations</Card.Title>
                        <Card.Text className='text-start'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="outline-success">Explore more<BiRightArrowAlt /></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" style={{ height: "15vw" }} src={img3} />
                    <Card.Body>
                        <Card.Title className='text-start'>Commercial System</Card.Title>
                        <Card.Text className='text-start'>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="outline-success">Explore more<BiRightArrowAlt /></Button>
                    </Card.Body>
                </Card>


            </div>

        </div>
    );
};

export default ElectricDealerShip2;