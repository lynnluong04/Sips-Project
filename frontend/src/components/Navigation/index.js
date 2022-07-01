import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import * as sessionActions from '../../store/session';

function Navigation({ isLoaded, isHome }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const credential = 'Demo-lition';
  const password = 'password';

  const DemoLogin = (e) => {
    return dispatch(sessionActions.login({ credential, password }))
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <button  className={isHome?'navhome-button':'nav-button'} id="demo-button" onClick={DemoLogin}>Demo User</button>
        <NavLink to="/login" className='nav-button' id='login-button'>Log In</NavLink>
        <NavLink to="/signup" className='nav-button' id='signup-button'>Sign Up</NavLink>
      </>
    );
  }



  return (
    <div className='navbar-container'>
      <img src=''/>
      <ul className='navbar'>
        <li className='navbar'>
          <div className='navbar-right'>
            <NavLink exact to="/"> <img className='sips-logo' src='https://www.linkpicture.com/q/sipslogo-blue.png'/> </NavLink>
            <NavLink exact to='/businesses' className="all businesses">Businesses</NavLink>
            <NavLink exact to={sessionUser?'/businesses/new': '/login'} className="add business">Add Your Business!</NavLink>
          </div>
          <div className='navbar-left'>
            {isLoaded && sessionLinks}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
