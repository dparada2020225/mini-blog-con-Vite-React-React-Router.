import { useState } from 'react'
import { usePokemonList } from '../hooks/usePokemon'
import PokemonCard from '../components/PokemonCard'
import SearchBar from '../components/SearchBar'

function PokemonList() {
  const { pokemons, loading, error } = usePokemonList(40)
  const [search, setSearch] = useState('')

  const filtered = pokemons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return <p className="loading">Cargando Pokédex...</p>
  if (error) return <p className="error">Error: {error}</p>

  return (
    <div className="pokemon-list">
      <h1>Pokédex</h1>
      <SearchBar value={search} onChange={setSearch} />
      <p className="results-count">{filtered.length} Pokémon encontrados</p>
      <div className="pokemon-grid">
        {filtered.map((p) => (
          <PokemonCard
            key={p.id}
            id={p.id}
            name={p.name}
            sprite={p.sprites.front_default}
            types={p.types.map((t) => t.type.name)}
          />
        ))}
      </div>
    </div>
  )
}

export default PokemonList