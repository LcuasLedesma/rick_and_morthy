import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/index.css";
import { addFavorite, removeFavorite } from "../redux/action";

function Card(props) {
  const { id, name, gender, species, image, onClose } = props;

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const isFavorite = favorites.some((fav) => fav.id === id);
    setIsFav(isFavorite);
  }, [favorites, id]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFavorite(id));
    } else {
      setIsFav(true);
      dispatch(addFavorite(props));
    }
  };

  return (
    <div className="card">
      {isFav ? (
        <button className="corazon" onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button className="corazon" onClick={handleFavorite}>
          🤍
        </button>
      )}

      <button onClick={onClose} className="boton">
        X
      </button>
      <Link to={`/detail/${id}`} className="link">
        <h1>{name}</h1>
      </Link>
      <h2>{species}</h2>
      <h2>{gender}</h2>

      <img src={image} alt={name} className="imagen" />
    </div>
  );
}

export default Card;
