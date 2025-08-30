import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuthUser } from '../redux/userSlice';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        email: "",
        username: "",
        password: ""
    });



    async function handleSubmit(e) {
        e.preventDefault();
        try {
           const res =  await axios.post(`http://localhost:8080/api/v1/user/login`, user, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            
            dispatch(setAuthUser(res.data))
            navigate("/");
            
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
        }
        setUser({
            email: "",
            username: "",
            password: ""
        })

    }


    
    return (
        <div className='flex items-center justify-between h-screen'>
            <form onSubmit={handleSubmit} className='w-[25%] mx-auto border-2 p-2 rounded-md '>
                <div className="mb-2 ">
                    <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
                    <input
                        type="text"
                        value={user.username}
                        onChange={(e) => { setUser({ ...user, username: e.target.value }) }}
                        id="username"
                        name="username"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your username"
                    />
                </div>


                <p className=' font-bold text-center'>OR</p>

                <div className="mb-2">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        value={user.email}
                        onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                    />
                </div>


                <div className="mb-2 relative">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                    <input
                        type={`${showPassword ? "text" : "password"}`}
                        value={user.password}
                        onChange={(e) => { setUser({ ...user, password: e.target.value }) }}
                        id="password"
                        name="password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                    />
                    {showPassword ? <FaEye onClick={() => setShowPassword(!showPassword)} className='absolute right-2 top-11 text-xl' /> : <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className='absolute right-2 top-11 text-xl' />}

                </div>




                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition cursor-pointer"
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login
