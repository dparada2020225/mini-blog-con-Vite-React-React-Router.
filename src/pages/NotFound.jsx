import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>¡Esta ruta no existe! Quizás un Pokémon se la comió.</p>
      <Link to="/" className="btn-primary">Volver al inicio</Link>
    </div>
  )
}

export default NotFound