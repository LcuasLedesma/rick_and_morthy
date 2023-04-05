import React, { useState } from "react";
import { validateEmail, validatePassword } from "../validation";


function Form (props){
  const [userData, setUserData] = useState({email: '', password: ''});
  const [errors, setErrors] = useState({})

  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setUserData({...userData, [name]: value});
    console.log(userData);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    const emailErrors = validateEmail(userData.email);
    const passwordErrors = validatePassword(userData.password);

    setErrors({ email: emailErrors.email, password: passwordErrors.password });

    if (Object.keys(emailErrors).length === 0 && Object.keys(passwordErrors).length === 0) {
      // Validación pasada, enviar formulario
      console.log("Formulario enviado");
    }
    props.login(userData)
  }

  return(
    <form onSubmit={handleSubmit} className='form'>
      
      <label htmlFor="email" className="label2">email</label>
      <input 
        type="text"
        id="email"
        name="email"
        value={userData.email}
        onChange={handleChange} 
        className="form-control1"
      />
      
      {errors.email && <div className="email-error">{errors.email}</div>}
      
      <label htmlFor="password" className="label1"> password</label>
      <input 
        type="text"
        id="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
        className="form-control2"
      />
      {errors.password && <div className="password-error">{errors.password}</div>}
      
      <button className="btn4">Submit</button>
  </form>
  )
}
  

export default Form
