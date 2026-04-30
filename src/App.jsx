import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PokemonList from './pages/PokemonList'
import PokemonDetail from './pages/PokemonDetail'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<PokemonList />} />
          <Route path="/items/:id" element={<PokemonDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App