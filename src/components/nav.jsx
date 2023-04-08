import React, { useState } from 'react';
import '../css/nav.css'
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
    <nav className='nav'>
      
        <div className='left'>
          <input type="text" value={id} onChange={handleChange} placeholder='Search your card' />
          <button onClick={onSearch} className='button'>Add</button>
        </div>
        
        <div className='buttons'>
          <Link to="/Home"><button >Home</button></Link>
          <Link to="/about"><button >About</button></Link>
          <button onClick={handleLogOut} >Log out</button>
          <Link to="/Favorites"><button >Favorites</button></Link>
        </div>
    
    </nav>
    
  );
}


