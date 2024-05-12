
import React, { useState } from 'react';
import { signIn } from './services/api';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

const SignInPage: React.FC = () => {
    const [email, setEmail] = useState('eve.holt@reqres.in');
    const [password, setPassword] = useState('cityslicka');

    const nav = useNavigate()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();


        try {
            const response = await signIn(email, password);
            if (response?.token) {
                localStorage.setItem("Token", response?.token)
                nav("Home")
                toast.success("User successfully login")
            } else {
                toast.error(response?.error)

            }
        } catch (error: any) {
            toast.error(error)


        }

    };

    const handleSignUp = (e: React.FormEvent) => {
        nav("/SignUp")
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-md w-full py-12 px-6">
                <h2 className="text-3xl font-semibold mb-4">Login</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md mb-4 transition duration-300 hover:bg-blue-600"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                    <button
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md transition duration-300 hover:bg-blue-600"
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;


// if (userLoginId && userPassword) {

//     fetch('https://dummyjson.com/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({

//             username: userLoginId,
//             password: userPassword,
//             expiresInMins: 30, // optional, defaults to 60
//         })
//     })
//         .then(res => res.json())
//         .then(data => {

//             if (data?.token) {
//                 localStorage.setItem("Token", data?.token)
//                 nav("home")
//                 setLoading(false)

//             } else {
//                 toast.error(data?.message)
//                 setLoading(false)


//             }

//         });
// } else {
//     setLoading(false)

//     toast.error("Please fill all fileds")
// }