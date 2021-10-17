import { Link } from 'react-router-dom'
import { planets } from 'types'

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
