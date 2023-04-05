import React, { useState } from 'react';
import '../index.css'
import {Link,  useNavigate} from 'react-router-dom'

export default function Nav(props) {
  const navigate = useNavigate();
  const [id, setId] = useState([])
  const handleChange = (e) =>{
    const ids = e.target.value
    setId(ids)
  }

  const onSearch = () => {
    props.onSearch(id);
    setId('')
  };

  const handleLogOut = () =>{
    props.setAccess(false);
    navigate('/')
  }
  return (
    <nav className='header'>
      <input type="text" value={id} onChange={handleChange}/>
      <button onClick={onSearch} className='btn'>agregar</button>
      <Link to="/Home"><button className='btn2'>Home</button></Link>
      <Link to="/about"><button className='btn1'>About</button></Link>
      <button onClick={handleLogOut} className='btn3'>Log out</button>
    </nav>
  );
}


