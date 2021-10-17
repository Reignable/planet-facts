import { Link } from 'react-router-dom'

const planets = [
  'mercury',
  'venus',
  'earth',
  'mars',
  'jupiter',
  'saturn',
  'uranus',
  'neptune',
]

const Nav = (): JSX.Element => (
  <nav>
    <ul>
      {planets.map((planet) => (
        <Link to={`/${planet}`}>{planet.toUpperCase()}</Link>
      ))}
    </ul>
  </nav>
)

export { Nav }
