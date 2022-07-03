//components/footer
import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css"

function Footer() {
    return (
        <footer className='footer container'>
            <div >
                <Link className='github link' to="https://github.com/lynnluong04/Sips-Project">
                <img src='https://www.linkpicture.com/q/githublogowhite.png'/>
                </Link>
                <Link to="www.linkedin.com/in/lynn-luong-905740139"></Link>
            </div>
        </footer>
    )
}

export default Footer;
