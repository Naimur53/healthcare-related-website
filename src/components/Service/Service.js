import React from 'react';
import useCard from '../../hooks/useCard';
import SingleService from '../SingleService/SingleService';

const Service = () => {
    const { data } = useCard();
    console.log(data);
    return (
        <div className="container py-5">
            <div className='text-center py-5'>
                <h2>Our Services</h2>
            </div>
            <div id='services' className="row row-cols-1 row-cols-md-3 g-4">
                {
                    data?.map(singleData => <SingleService key={singleData.id} data={singleData}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Service;