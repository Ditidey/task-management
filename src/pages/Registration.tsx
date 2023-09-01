import React, { useContext, useState } from 'react';
import google from '../assets/google.png';
import { contextProvider } from '../provider/Authprovider';

const Registration = () => {
    const {userCreation} = useContext(contextProvider)
    const [error, setError] = useState('')

    const handleSubmit = (event)=>{
            event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        userCreation(email, password)
        .then(()=>{})
        .catch((err)=>{
            setError(err.message)
        })
        form.reset()
    }
    return (
        <div>
        <div>
            <h2>Create Account</h2>
        </div>
        <div>
            {error && <p className='text-center text-red-600 text-xl'>{error}</p>}
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
            <button type="submit">Create</button>
        </form>
        <div>
            <img src={google} alt="" />
        </div>

    </div>
    );
};

export default Registration;