import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { HashLoader } from 'react-spinners';

const PrivateRoutes = ({ children }) => {

  const { user, loading } = use(AuthContext)
  const location = useLocation()

  if (loading) {
    return (
      <div className='h-[97vh] flex justify-center items-center'>
        <HashLoader />
      </div>
    );
  }


  if (!user) {
    return  <Navigate to={'/signin'} state={location.pathname}></Navigate>
  }

  return children;
};

export default PrivateRoutes;
