import React, { useState } from "react";
import { validateEmail, validatePassword } from "../validation";
import '../css/form.css'


function Form (props){
  const [userData, setUserData] = useState({email: '', password: ''});
  const [errors, setErrors] = useState({})

  const handleChange = (e)=>{
    e.preventDefault(); 
    const name = e.target.name;
    const value = e.target.value;
    setUserData({...userData, [name]: value});

    const emailErrors = validateEmail(userData.email);
    const passwordErrors = validatePassword(userData.password);

    setErrors({ email: emailErrors.email, password: passwordErrors.password });
    
    
  };

  const handleSubmit = (e) =>{
    e.preventDefault();  
    props.login(userData)  
  }

  return(
    <form onSubmit={handleSubmit} className='form'>
      
      <div className="email-container">
        <label htmlFor="email" className="label22">email</label>
        <input 
          type="text"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange} 
          
      />
        {errors.email ? <p>{errors.email}</p>: ''}
      </div>
      
      <div className="password-container">
        <label htmlFor="password" className="label11"> password</label>
        <input 
          type="text"
          id="password"
          name="password"
          value={userData.password}
          onChange={handleChange} 
        />
        {errors.password ? <p>{errors.password}</p>: ''}
      </div>
      
      
        <button className="buttn" disabled={!userData.email || !userData.password || errors.email || errors.password}>Submit</button>
      
      
  </form>
  )
}
  

export default Form