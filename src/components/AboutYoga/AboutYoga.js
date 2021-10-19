import React from 'react';

const AboutYoga = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div style={{ backgroundColor: '#191919' }} className="col-md-6  p-0">
                    <div className="p-5 mt-5">
                        <h2 className=''>About Yoga</h2>
                        <hr className='w-25 bg-pink opacity-100' />
                        <p>Yoga is a group of physical, mental, and spiritual practices or disciplines that originated in ancient India, aimed at controlling and stilling the mind, and recognizing the detached 'witness-consciousness' as untouched by the activities of the mind and mundane suffering
                            The first mention of the word “yoga” appears in Rig Veda, a collection of ancient texts. Yoga comes from the Sanskrit word “yuj,” which means “union” or “to join.”
                        </p>
                    </div>
                </div>
                <div className='col-md-6 p-0'>
                    <img className='w-100' src="https://media.istockphoto.com/photos/group-of-sporty-people-in-easy-seat-pose-close-up-picture-id922344888?b=1&k=20&m=922344888&s=170667a&w=0&h=Dw6yFFPJH8UgUfX8ANHvNOaJwogCc9OIZdEwkT0xOu8=" alt="" />

                </div>
            </div>
        </div>
    );
};

export default AboutYoga;