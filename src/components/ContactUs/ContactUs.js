import React from 'react';
import './ContactUs.css'
const ContactUs = () => {
    return (
        <div className='container py-5'>
            <h2 className='text-center py-5 fw-light'>Contact us for any help</h2>
            <div className="row">
                {/* info wrapper  */}
                <div className="col-md-6">
                    <div className="location-box my-4 text-center py-4">
                        <i className="fas fa-map-marker-alt fs-4 text-pink mb-4 p-4   rounded-circle"></i>
                        <h2>Our Address</h2>
                        <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="location-box  text-center py-4">
                                <i className="far fa-envelope fs-4 text-pink mb-4 p-4  rounded-circle"></i>
                                <h2>Email Us</h2>
                                <p>info@example.com</p>
                                <p>contact@example.com</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="location-box text-center py-4">
                                <i className="fas fa-phone-alt fs-4 text-pink mb-4 p-4 rounded-circle  "></i>
                                <h2>Call Us</h2>
                                <p>+1 5589 55488 55</p>
                                <p>+1 6678 254445 41</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* form wapper  */}
                <div className="col-md-6">
                    <form action="s" className="mt-4 px-3 py-5 py-5">
                        <div className="mb-3">
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control bg-transparent border border-secondary mb-4 py-3" placeholder="Your Name" aria-label="First name" />
                                </div>
                                <div className="col">
                                    <input type="email" className="form-control bg-transparent border border-secondary mb-4 py-3" placeholder="Your Email" aria-label="Last name" />
                                </div>
                            </div>
                            <input type="text" className="form-control bg-transparent border border-secondary mb-4 py-3" id="exampleFormControlInput1" placeholder="Subject" />
                        </div>
                        <div className="mb-4">
                            <textarea className="form-control bg-transparent border border-secondary" placeholder="Message" id="exampleFormControlTextarea1" rows="10"></textarea>
                        </div>
                        <button type="button" className="btn btn-lg bg-pink fr-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;