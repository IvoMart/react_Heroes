import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from "../auth/authContext";

export const PrivateRoutes = ({ children }) => {

    const {pathname, search} = useLocation();
    const { user } = useContext(AuthContext);

    localStorage.setItem('Last path', pathname+search )

    return (user.logged ? children : <Navigate to={'/login'} />  )
};