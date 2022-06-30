import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import * as sessionActions from '../../store/session';

function Navigation({ isLoaded }){
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
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <button onClick={DemoLogin}>Demo User</button>
      </>
    );
  }



  return (
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
        <NavLink exact to='/businesses'>Businesses</NavLink>
        <NavLink exact to={sessionUser?'/businesses/new': '/login'}>Add Your Business!</NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
