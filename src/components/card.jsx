import '../index.css' 
import { Link } from 'react-router-dom'

function Card({id,name, gender, onClose, species, image}){
  return(
    <div className='card'>
      <button onClick={onClose} className='boton'>X</button>
      <Link to={`/detail/${id}`} className='link'>
        <h1>{name}</h1>
      </Link>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <img src={image} alt={name} className='imagen' />
    </div>
  )
}

export default Card