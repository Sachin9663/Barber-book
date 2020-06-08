import React from 'react';

import SignIn from '../../component/signin/signin.component';
import SignUp from '../../component/signup/signup.component';

import './login.style.scss'

const Login =()=>(
    <div className='login'>
    <SignIn/>
    <SignUp/>
    </div>
)
export default Login;