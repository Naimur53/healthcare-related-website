import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router';
import { HashLink } from 'react-router-hash-link';

const CardDetails = () => {
    const { Id } = useParams();
    const [data, setData] = useState({});
    const ourId = parseInt(Id);
    useEffect(() => {
        fetch('https://naimur53.github.io/health-api/fakeData.json')
            .then(res => res.json())
            .then(result => {
                const matchData = result.filter(s => s.id === ourId)
                setData(matchData[0]);
            }).catch(error => {
                console.log(error);;
            })
    }, []);
    const { name, img, price, description } = data;

    return (
        <div className='container py-5'>
            <div className="card bg-transparent mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title text-pink fw-normal">{name}</h2>
                            <p className="card-text fs-3 fw-lighter"> {description}</p>
                            <h3 className='text-pink fw-light'>Price: <span className='text-'>${price}</span></h3>
                            <Nav.Link as={HashLink} to='/home#services' className="btn mt-4 text-white bg-pink">Back to service</Nav.Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;