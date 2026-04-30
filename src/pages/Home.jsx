import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'
import PokemonCard from '../components/PokemonCard'

function Home() {
  const { favorites } = useFavorites()

  return (
    <div className="home">
      <section className="hero">
        <h1>Bienvenido al PokéBlog</h1>
        <p>Explora la Pokédex, guarda tus favoritos y descubre Pokémon al azar.</p>
        <Link to="/items" className="btn-primary">Ver Pokédex</Link>
      </section>

      {favorites.length > 0 && (
        <section className="favorites-section">
          <h2>⭐ Tus favoritos ({favorites.length})</h2>
          <div className="pokemon-grid">
            {favorites.map((p) => (
              <PokemonCard
                key={p.id}
                id={p.id}
                name={p.name}
                sprite={p.sprite}
                types={['normal']}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default Home