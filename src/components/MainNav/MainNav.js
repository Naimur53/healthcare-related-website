import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import './MainNav.css'

const MainNav = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='navbar' variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand href="#home" >
                        <img className='img-fluid w-50' src="https://nordis.true-emotions.studio/yoga-fit/wp-content/uploads/sites/12/2018/06/wiyog.svg" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#features">About us</Nav.Link>
                            <Nav.Link href="#features">Service</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default MainNav;