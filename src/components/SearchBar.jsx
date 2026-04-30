import PropTypes from 'prop-types'

function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="searchbar-input"
      />
      {value && (
        <button onClick={() => onChange('')} className="searchbar-clear">✕</button>
      )}
    </div>
  )
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

SearchBar.defaultProps = {
  placeholder: 'Buscar Pokémon...',
}

export default SearchBar