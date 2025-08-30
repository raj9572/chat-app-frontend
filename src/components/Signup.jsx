import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'


const Signup = () => {

    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const handleCheckbox = (gender) => {
        setUser({ ...user, gender });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8080/api/v1/user/register`, user, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);

            }
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
        }
        setUser({
            email: "",
            fullName: "",
            username: "",
            password: "",
            confirmPassword: "",
            gender: "",
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

                <div className="mb-2 ">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        value={user.fullName}
                        onChange={(e) => { setUser({ ...user, fullName: e.target.value }) }}
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
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
                <div className="mb-2 relative">
                    <label htmlFor="confirm-password" className="block text-gray-700 font-medium mb-2">confirm-password</label>
                    <input
                        type={`${showPassword ? "text" : "password"}`}
                        value={user.confirmPassword}
                        onChange={(e) => { setUser({ ...user, confirmPassword: e.target.value }) }}
                        id="confirm-password"
                        name="confirm-password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                    />
                    {showPassword ? <FaEye onClick={() => setShowPassword(!showPassword)} className='absolute right-2 top-11 text-xl' /> : <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className='absolute right-2 top-11 text-xl' />}

                </div>

                <div className='flex items-center space-x-3 mb-2'>
                    <div className='flex itemx-center '>
                        <input
                            type="checkbox"
                            checked={user.gender === "male"}
                            onChange={() => handleCheckbox("male")}
                            defaultChecked
                            id="male-checkbox"
                        />
                        <label htmlFor="male-checkbox">Male</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            checked={user.gender === "female"}
                            onChange={() => handleCheckbox("female")}
                            name="" id="female-checkbox" />
                        <label htmlFor="female-checkbox">Female</label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition cursor-pointer"
                >
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default Signup
