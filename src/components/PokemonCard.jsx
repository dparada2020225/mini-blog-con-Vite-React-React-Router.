import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useFavorites } from '../context/FavoritesContext'

function PokemonCard({ id, name, sprite, types }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites()
  const fav = isFavorite(id)

  const handleFav = () => {
    if (fav) {
      removeFavorite(id)
    } else {
      addFavorite({ id, name, sprite })
    }
  }

  return (
    <div className={`pokemon-card type-${types[0]}`}>
      <img src={sprite} alt={name} />
      <h3>#{id} {name}</h3>
      <div className="types">
        {types.map((t) => (
          <span key={t} className={`type-badge ${t}`}>{t}</span>
        ))}
      </div>
      <div className="card-actions">
        <Link to={`/items/${id}`} className="btn-detail">Ver más</Link>
        <button onClick={handleFav} className="btn-fav">
          {fav ? '⭐ Quitar' : '☆ Favorito'}
        </button>
      </div>
    </div>
  )
}

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sprite: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default PokemonCard