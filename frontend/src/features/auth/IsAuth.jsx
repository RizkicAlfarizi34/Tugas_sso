import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Login from '../../pages/Login';

const IsAuth = () => {
  const [access, setAccess] = useState(localStorage.getItem("access"));
  const [redirect, setRedirect] = useState(localStorage.getItem("redirect"));
  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate("/login")
  }

  useEffect(() => {
    const handleStorageChange = () => {
      setAccess(localStorage.getItem("access"));
      setRedirect(localStorage.getItem("redirect"));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  if (access && redirect === 'true') {
    return <Navigate to="/dashboard" />;
  } else if (redirect === 'false') {
    return <Navigate to="/login" />;
  } else {
    return <Login />;
  }
  
};

export default IsAuth;
