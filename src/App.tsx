import React, { useEffect } from 'react';
import './App.css';
import ProtectedRoute from './ProtectedRoute';
import { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';


function App() {


  const nav = useNavigate()


  useEffect(() => {
    const interval = setInterval(() => {
      const userLoginToken = localStorage.getItem("Token")
      if (userLoginToken) {
        nav("Home")
      } else {
        nav("/")
      }


    }, 2000)
    return () => clearInterval(interval)
  }, [])


  return (
    <div className="App">
      {/* <SignInPage /> */}
      <ProtectedRoute />
      <Toaster position="top-center" />

    </div>
  );
}

export default App;
