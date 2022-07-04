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
        <button  className={isHome?'home nav-button':'nav-button'} id={isHome?"home-demo-button":"demo-button"} onClick={DemoLogin}>Demo User</button>
        <NavLink to="/login" className={isHome?'home nav-button':'nav-button'} id={isHome? "home-login-button":"login-button"}>Log In</NavLink>
        <NavLink to="/signup" className={isHome?'home nav-button':'nav-button'} id={isHome? "home-signup-button":"signup-button"}>Sign Up</NavLink>
      </>
    );
  }



  return (
    <div className={isHome?'home navbar-container':'navbar-container'}>
      <img src=''/>
      <ul className={isHome?'home navbar':'navbar'}>
        <li className={isHome?'home navbar':'navbar'}>
          <div className={isHome?'home navbar-right':'navbar-right'}>
            <NavLink exact to="/"> <img className={isHome?'home sips-logo':'sips-logo'} src={isHome? "https://www.linkpicture.com/q/whitebluelogoicon-nobg.png":'https://www.linkpicture.com/q/sipslogo-blue-nobg.png'}/> </NavLink>
            <NavLink exact to='/businesses' className={isHome?'home all businesses':"all business"}>Businesses</NavLink>
            <NavLink exact to={sessionUser?'/businesses/new': '/login'} className={isHome?"home add businesses":"add business"}>Add Your Business!</NavLink>
          </div>
          <div className={isHome? "home navbar-left":'navbar-left'}>
            {isLoaded && sessionLinks}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
