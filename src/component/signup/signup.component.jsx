import React from 'react';

import FormInput from '../form-input/form-input.component';

import './signup.style.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})

}


handleSubmit=(event)=>{
    this.preventDefault();
  
   const { password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    } 
}

  render(){
    return(
        <div className='signup'>
        <h2>I Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                
                <FormInput type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange}/>
               
                <FormInput type='email' label='Email' name='email' value={this.state.email} onChange={this.handleChange}/>
                
                <FormInput type='password' label='Password' name='password' value={this.state.password} onChange={this.handleChange}/>
                
                <FormInput  type='password' label='Confirm Password' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange}/>
                
                
                <button type='submit'> Book</button>
            </form>
        </div>
    )
}
}

export default SignUp;