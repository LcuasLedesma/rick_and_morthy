import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavorite, removeFavorite } from '../redux/action';
import { useState, useEffect } from 'react';
import '../css/index.css';


function Card(props) {
  const { id, name, gender, onClose, species, image } = props;
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const isFavorite = favorites.some(favorite => favorite.id === id);
    setIsFav(isFavorite);
  }, [favorites, id]);

  const handleAddFavorite = () => {
    dispatch(addFavorite(id));
    setIsFav(prevIsFav => !prevIsFav);
  }

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(id));
    setIsFav(prevIsFav => !prevIsFav);
  }

  return(
    <div className='card'>
      
      {
        isFav ? 
        (
          <button className='corazon'  onClick={handleRemoveFavorite}>❤️</button>
        ) :
        (
          <button className='corazon' onClick={handleAddFavorite}>🤍</button>
        )
      }
     
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

export default Card;
