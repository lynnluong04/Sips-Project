//components/footer
import React from 'react';
import "./footer.css"

function Footer() {
    return (
        <footer className='footer container'>
            <div className='footer' >
                <div className='item discover'>
                    <p>Discover</p>
                    <a className='footer github link' href="https://github.com/lynnluong04/Sips-Project">
                    <img className='github image' alt='github link' src='https://www.linkpicture.com/q/github-logo.png'/>
                    </a>
                </div>
                <div className='item about'>
                    <p>About</p>
                    <a className='footer' href="www.linkedin.com/in/lynn-luong-905740139">
                        <img className='linkedin image' alt='linkedin link' src="https://www.linkpicture.com/q/linkedin_9.png"/>
                    </a>
                </div>
                <div className='item tech'>
                    <ul className='tech'>
                        Technologies Used
                        <li>React</li>
                        <li>Redux</li>
                        <li>Express</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
