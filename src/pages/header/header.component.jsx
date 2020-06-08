import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';

const Header =()=>(
    <div className='header'>
    <div className='options'>
    <Link className='option' to='/login'>
    Login for owner
    </Link>
    </div>
    </div>
)

export default Header;