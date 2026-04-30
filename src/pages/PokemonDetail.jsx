import { useParams, useNavigate, Link } from 'react-router-dom'
import { usePokemonDetail } from '../hooks/usePokemon'
import { useFavorites } from '../context/FavoritesContext'

function PokemonDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { pokemon, loading, error } = usePokemonDetail(id)
  const { isFavorite, addFavorite, removeFavorite } = useFavorites()

  if (loading) return <p className="loading">Cargando...</p>
  if (error) return <p className="error">Error: {error}</p>
  if (!pokemon) return null

  const fav = isFavorite(pokemon.id)
  const sprite = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default

  const handleFav = () => {
    if (fav) {
      removeFavorite(pokemon.id)
    } else {
      addFavorite({ id: pokemon.id, name: pokemon.name, sprite })
    }
  }

  return (
    <div className="pokemon-detail">
      <Link to="/items" className="back-link">← Volver</Link>

      <div className="detail-card">
        <img src={sprite} alt={pokemon.name} className="detail-sprite" />
        <div className="detail-info">
          <h1>#{pokemon.id} {pokemon.name}</h1>

          <div className="types">
            {pokemon.types.map((t) => (
              <span key={t.type.name} className={`type-badge ${t.type.name}`}>
                {t.type.name}
              </span>
            ))}
          </div>

          <div className="stats">
            <h3>Estadísticas</h3>
            {pokemon.stats.map((s) => (
              <div key={s.stat.name} className="stat-row">
                <span className="stat-name">{s.stat.name}</span>
                <div className="stat-bar">
                  <div className="stat-fill" style={{ width: `${Math.min(s.base_stat, 150) / 150 * 100}%` }} />
                </div>
                <span className="stat-value">{s.base_stat}</span>
              </div>
            ))}
          </div>

          <div className="detail-meta">
            <p>Altura: {pokemon.height / 10} m</p>
            <p>Peso: {pokemon.weight / 10} kg</p>
            <p>Experiencia base: {pokemon.base_experience}</p>
          </div>

          <div className="detail-actions">
            <button onClick={handleFav} className="btn-fav">
              {fav ? '⭐ Quitar de favoritos' : '☆ Agregar a favoritos'}
            </button>
            <button onClick={() => navigate(`/items/${Math.floor(Math.random() * 898) + 1}`)} className="btn-random">
              🎲 Otro aleatorio
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail