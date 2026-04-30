import { useState, useEffect } from 'react'

export function usePokemonList(limit = 40) {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
        const data = await res.json()

        const detailed = await Promise.all(
          data.results.map((p) => fetch(p.url).then((r) => r.json()))
        )
        setPokemons(detailed)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemons()
  }, [limit])

  return { pokemons, loading, error }
}

export function usePokemonDetail(id) {
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        setPokemon(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [id])

  return { pokemon, loading, error }
}