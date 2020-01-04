import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
render() {
return (
<NavWrapper className="navbar navbar-expand-md navbar-dark px-sm-5">
    <Link to='/'>
    <img src={logo} alt="home" className="navbar-brand nav-logo-size" />
    </Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav text-center">
            <li className="nav-item ml-5">
                <Link to="/" className="nav-link">
                Men
                </Link>
            </li>
            <li className="nav-item ml-5">
                <Link to="/login" className="nav-link">
                Login
                </Link>
            </li>
            <li className="nav-item ml-5">
                <Link to="/signup" className="nav-link">
                Signup
                </Link>
            </li>
        </ul>

        <Link to='/cart' className="ml-auto ">
        <ButtonContainer>
            <span className="mr-2">
                <i className="fas fa-cart-plus" />
            </span>
            My Cart
        </ButtonContainer>
        </Link>
    </div>
</NavWrapper>
);
}
}

const NavWrapper = styled.nav`
background-color: var(--mainBlue);
.nav-link{
color: var(--mainWhite) !important;
font-size: 1.1rem;
}
`