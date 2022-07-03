//components/footer
import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css"

function Footer() {
    return (
        <footer className='footer container'>
            <div >
                <a className='github link' href="https://github.com/lynnluong04/Sips-Project">
                <img className='github image' src='https://www.linkpicture.com/q/githublogowhite.png'/>
                </a>
                <a href="www.linkedin.com/in/lynn-luong-905740139"></a>
            </div>
        </footer>
    )
}

export default Footer;
