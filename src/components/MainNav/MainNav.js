import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './MainNav.css'

const MainNav = () => {
    const { user, handleLogOut } = useAuth();
    console.log(user, 'nav');
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='navbar' variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand href="#home" >
                        <img className='img-fluid w-50' src="https://nordis.true-emotions.studio/yoga-fit/wp-content/uploads/sites/12/2018/06/wiyog.svg" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link activeClassName="text-pink" as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link activeClassName="text-pink" as={NavLink} to="/ContactUs">Contact us</Nav.Link>
                            <Nav.Link activeClassName="text-pink" as={NavLink} to="/aboutUs">About us</Nav.Link>
                        </Nav>
                        <Nav className='ms-auto'>
                            {
                                user.displayName ? <button className='btn btn-danger me-4   fw-light' onClick={handleLogOut}>logOut</button> : <Nav.Link as={NavLink} to="/signup">Sign up</Nav.Link>
                            }
                            {
                                user.displayName ?
                                    <img style={{ width: '40px' }} className='rounded-circle' src={user.photoURL} alt="" /> : <Nav.Link as={NavLink} to="/login">Log in</Nav.Link>
                            }
                            {
                                user.displayName && <span className='my-auto ms-3'>{user.displayName}</span>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default MainNav;