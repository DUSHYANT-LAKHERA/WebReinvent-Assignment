// App.tsx or wherever your main routing configuration resides
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './SignInPage';
import DashboardPage from './DashboardPage';
import SignUpPage from './SignUpPage';

const ProtectedRoute: React.FC = () => {

    return (


        <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/Home" element={<DashboardPage />} />
            <Route path="/SignUp" element={<SignUpPage />} />
        </Routes>


    );
};

export default ProtectedRoute;
