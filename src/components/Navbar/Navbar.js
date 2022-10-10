import React from 'react';
import Logo from '../../image/logo.png';

const Navbar = () => {
    return (
        <div>
            <div>
                <img src={Logo} alt="logo_image" />
                <h2>MCQ EXAM</h2>
            </div>
            <div></div>
        </div>
    );
};

export default Navbar;