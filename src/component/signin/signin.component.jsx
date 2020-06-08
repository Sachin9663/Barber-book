import React from 'react';

import FormInput from '../form-input/form-input.component';
import './signin.style.scss';


class SignIn extends React.Component{
    constructor(){
        super();

        this.state={
            name:'',
            email:''
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
                    
                    <FormInput type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange}/>
                   
                    <FormInput type='email' label='Email' name='email' value={this.state.email} onChange={this.handleChange}/>
                <div className='button'>
                    <button type='submit'> Sign IN</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;