import React, { useContext, useState } from 'react';
import google from '../assets/google.png';
import { contextProvider } from '../provider/Authprovider';
import {Link} from 'react-router-dom'

const Login = ({ open, setOpen }) => {
    const {userLogin} = useContext(contextProvider)
    const [error, setError] = useState('')

    const handleSubmit = (event)=>{
            event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        userLogin(email, password)
        .then(()=>{})
        .catch((err)=>{
            setError(err.message)
        })
        form.reset()
    }
    return (
        <div className={`z-10 md:h-[400px] md:w-[400px] bg-yellow-200 fixed shadow-2xl   ${open ? '' : 'hidden'}`}>
            
            <button onClick={() => setOpen(!open)} className='w-10 h-10 rounded-full bg-red-600 text-yellow-100 right-0 bottom-0 absolute'>x</button>

            <div className='p-10'>
                <div>
                    <h2 className='text-center font-bold text-3xl'>Login </h2>
                </div>
                <form action="" onClick={handleSubmit}>
                    <div className='my-3'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className='my-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className='my-3'>
                        <label htmlFor="pass">Password</label>
                        <input type="password" name="pass" id="pass" />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <div>
                    <img src={google} alt="" />
                </div>
                <div  > <Link to='/register'>Create Account</Link> </div>
            </div>
        </div>
    );
};

export default Login;