import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useFavorites } from '../context/FavoritesContext'

function Navbar({ title }) {
  const navigate = useNavigate()
  const { favorites } = useFavorites()

  const goToRandom = () => {
    const randomId = Math.floor(Math.random() * 898) + 1
    navigate(`/items/${randomId}`)
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">{title}</Link>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/items">Pokédex</Link>
        <span className="favorites-count">⭐ {favorites.length}</span>
        <button onClick={goToRandom} className="btn-random">
          Aleatorio
        </button>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
}

Navbar.defaultProps = {
  title: '🔴 PokéBlog',
}

export default Navbar