//components/footer
import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css"

function Footer() {
    return (
        <div className='footer container'>
            <Link to="https://github.com/lynnluong04/Sips-Project"></Link>
            <Link to="www.linkedin.com/in/lynn-luong-905740139"></Link>
        </div>
    )
}

export default Footer;
