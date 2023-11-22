import React from 'react';
import {useSelector} from 'react-redux';
import {Authenticated, NonAuthenticated} from './MainNavigation';
import {selectUser} from '../redux/reducers/User';

const RootNavigation = () => {
  const user = useSelector(selectUser);
  return user.isLoggedIn ? <Authenticated /> : <NonAuthenticated />;
};

export default RootNavigation;
