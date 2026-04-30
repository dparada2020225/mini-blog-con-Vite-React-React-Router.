# 🔴 PokéBlog

Mini-blog de Pokémon construido con Vite + React + React Router. Nivel: **Senior**.

## Tecnologías

- Vite + React
- React Router DOM v6
- PokéAPI (https://pokeapi.co)
- Context API (favoritos globales)
- PropTypes

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Rutas

| Ruta | Descripción |
|---|---|
| `/` | Home con favoritos |
| `/items` | Listado con búsqueda |
| `/items/:id` | Detalle del Pokémon |
| `*` | Página 404 |

## Componente reutilizable: `PokemonCard`

| Prop | Tipo | Requerido | Descripción |
|---|---|---|---|
| `id` | number | ✓ | ID del Pokémon |
| `name` | string | ✓ | Nombre |
| `sprite` | string | ✓ | URL de la imagen |
| `types` | string[] | ✓ | Lista de tipos |

## Nivel Senior — requisitos cumplidos

- ✅ Context API: favoritos globales
- ✅ PropTypes en Navbar, PokemonCard, SearchBar
- ✅ Consumo de API externa (PokéAPI)
- ✅ Página 404
- ✅ Búsqueda/filtro en listado
- ✅ Botón aleatorio con useNavigate