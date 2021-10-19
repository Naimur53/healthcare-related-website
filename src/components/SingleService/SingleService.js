import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './SingleService.css';

const SingleService = props => {
    const { id, name, img, price, description } = props.data;
    return (
        <div className="col ">
            <div className="card card-wrapper h-100 bg-transparent ">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h2 className="card-title fw-normal">{name}</h2>
                    <h5 className="card-title fw-normal">{description.slice(0, 30)}</h5>
                    <h4 className="card-text">{price}</h4>
                </div>
                <Nav.Link className='py-2 rounded-3 border-0 text-center text-white card-btn' as={HashLink} to={`/home/${id}`}>
                    More Details

                </Nav.Link>
            </div>
        </div>
    );
};

export default SingleService;