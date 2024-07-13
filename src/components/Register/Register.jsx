import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Register.css'
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Register = () => {
    const {createUser, user} = useContext(AuthContext);
    const [error, setError] = useState('');
    
    const navigate = useNavigate();
    const registerSuccess = () =>{
        toast.success('SucessFull!!')
    }

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const phoneNumber = form.phone.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const email = form.email.value;
        

       
        //////////////validation checking
        if((phoneNumber.startsWith('880') && phoneNumber.length === 12) || (phoneNumber.startsWith('01') && phoneNumber.length === 11))
        {
            console.log(phoneNumber, password);
        }
        else{
            toast.error("Enter valid Phone Number");
        }
        if(password !== confirmPassword)
        {
 
            toast.error("Password Not match");
        }
        if(((phoneNumber.startsWith('880') && phoneNumber.length === 12) || (phoneNumber.startsWith('01') && phoneNumber.length === 11))&& (password === confirmPassword))
        {
            createUser(email, password)
            .then(result=>{
                form.reset();
                registerSuccess()
                navigate('/login');
            })
            .catch(error =>{
                setError(error.message);
            })
            
        }
       
    }
    

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 '>
             {/* -----------banner start------------ */}
            <div className='signUp-banner  relative text-white rounded-md shadow-lg text-center  flex items-center'>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className='relative max-w-md mx-auto space-y-4 px-4'>
                    <h1 className='text-4xl font-bold'>Welcome to <span className='text-black font-extrabold'>Grocery-Mart</span></h1>
                    <p className='font-semibold'>We prioritize quality, convenience, and customer satisfaction. Shop with us and enjoy a seamless grocery shopping experience from the comfort of your home.</p>
                </div>
            </div>
            {/* -----------banner end------------ */}
            {/* ----------sign up layout------------ */}
            <div className='py-16 px-20 space-y-4'>
                <h1 className=' flex justify-center md:justify-end'>Already have an account? <Link className='text-orange ms-2 underline font-semibold text-right' to='/login'>Sign In</Link></h1>
                <h1 className='text-2xl font-bold mt-4'>Sign Up to <span className='text-orange'>Grocery-Mart</span></h1>
                {/* ---------------------------buttons--------------------- */}
                <div className='flex flex-wrap space-x-4'>
                    <button className='px-4  mt-2 py-2 bg-red-600 text-white font-semibold rounded-md'><FaGoogle className='inline me-2 text-xl font-bold' />Sign up with Google</button>
                    <button className='px-4  mt-2 py-2 text-xl bg-sky-600 text-white fot-bold rounded-md'><FaFacebookF/></button>
                    <button className='px-4  mt-2 py-2 text-xl bg-cyan-800 text-white fot-bold rounded-md'><FaLinkedinIn/></button>
                    <button className='px-4  mt-2 py-2 text-xl bg-black text-white fot-bold rounded-md'><FaGithub/></button>
                </div>
                {/* ---------------------------------------------------------- */}
                <div className="flex items-center justify-center mt-4">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-gray-500">Or with Email</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* --------------form section start ---------------------*/}
                <div className="flex items-center justify-center">
                    <div className="bg-white w-full max-w-md">
                        <form className="space-y-6" onSubmit={handleRegister}>
                        <ToastContainer />
                            <div>
                                <label  className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input
                                required
                                type="number"
                                name="phone"
                                placeholder='Ex- 01XXXXXXXX5'
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label  className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                required
                                type="email"
                                name="email"
                                placeholder='Enter email'
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label  className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                required
                                type="password"
                                name='password'
                                placeholder='Enter password'
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                <input
                                required
                                type="password"
                                name='confirmPassword'
                                placeholder='Confirm password'
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            {
                                error && <p className='text-red-600'>{error}</p>
                            }
                            <div>
                                <button
                                type="submit"
                                className="w-full py-2 px-4 bg-orange text-white font-medium rounded-md hover:shadow-xl hover:font-bold"
                                >
                                Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                 {/* ---------form section end----------- */}
            </div>
        </div>
    );
};

export default Register;