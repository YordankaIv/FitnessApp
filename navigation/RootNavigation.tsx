import React from 'react';
import {useSelector} from 'react-redux';
import {Authenticated, NonAuthenticated} from './MainNavigation';

const RootNavigation = () => {
  const user = useSelector(
    (state: {user: {isLoggedIn: boolean}}) => state.user,
  );
  return user.isLoggedIn ? <Authenticated /> : <NonAuthenticated />;
};

export default RootNavigation;
