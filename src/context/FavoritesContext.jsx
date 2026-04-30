import { createContext, useContext, useState } from 'react'

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  const addFavorite = (pokemon) => {
    setFavorites((prev) =>
      prev.find((p) => p.id === pokemon.id) ? prev : [...prev, pokemon]
    )
  }

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((p) => p.id !== id))
  }

  const isFavorite = (id) => favorites.some((p) => p.id === id)

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  return useContext(FavoritesContext)
}