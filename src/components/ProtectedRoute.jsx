import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const userInfo = localStorage.getItem('userInfo');
    return userInfo ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;
