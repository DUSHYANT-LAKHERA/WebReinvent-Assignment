import React, { useState } from 'react';
import { signIn, signUp } from './services/api';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUpPage: React.FC = () => {

    const [emailSignUp, setEmailSignUp] = useState('');
    const [passwordSignUp, setPasswordSignUp] = useState('');

    const nav = useNavigate()

    const handleSignUp = async () => {

        try {
            const response = await signUp(emailSignUp, passwordSignUp);
            console.log(response)
            console.log(response, "fsdfsdf");
            if (response.error) {

                toast.error(response?.error)

            } else {
                toast.success("User successfully registered")
                nav("/")
            }

        } catch (error: any) {
            toast.error(error)




        }
    };
    const handleBackToLogin = (e: React.FormEvent) => {
        nav("/")
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-md w-full py-12 px-6">
                <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter your email"
                            value={emailSignUp}
                            onChange={(e) => setEmailSignUp(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter your password"
                            value={passwordSignUp}
                            onChange={(e) => setPasswordSignUp(e.target.value)}
                        />
                    </div>
                    <button
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md mb-4 transition duration-300 hover:bg-blue-600"
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </button>
                    <button
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md transition duration-300 hover:bg-blue-600"
                        onClick={handleBackToLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;