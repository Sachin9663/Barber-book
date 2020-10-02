import React from 'react';
import FormInput from '../form-input/form-input.component';
import './signin.style.scss';
import {Link} from 'react-router-dom';
import CustomButton from '../custombutton/custombutton.component';

class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        };
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
 
    handleSubmit=(event)=>{
        this.preventDefault();   
    }
    render(){
        return(
            <div className='signin'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' label='Email' name='email' value={this.state.email} onChange={this.handleChange}/>
                    <FormInput type='password' label='Password' name='password' value={this.state.password} onChange={this.handleChange}/>
                    <div className='button'>
                        <CustomButton type='submit'> <Link to='/'>sign in</Link></CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;