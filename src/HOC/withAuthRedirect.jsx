import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const withAuthRedirect = SomeComponent => {
  const PrivateComponent = props => {
    const userData = useSelector(state => state.user.userData);
    return userData ? (
      <SomeComponent {...props} />
    ) : (
      <Navigate to={'/login'} replace={true} />
    );
  };
  return PrivateComponent;
};

export default withAuthRedirect;
