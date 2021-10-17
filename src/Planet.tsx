import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Planet as PlanetType, PlanetInfo } from 'types'

const Planet = (): JSX.Element => {
  const { planet, view } = useParams<{
    planet: PlanetType
    view: 'overview' | 'structure' | 'geology'
  }>()

  const { data: planetInfo } = useQuery<PlanetInfo>(
    ['planet', planet],
    async () => {
      const planetInfoResponse = await fetch(`http://localhost:8000/${planet}`)
      return planetInfoResponse.json()
    },
  )

  return (
    <>
      <div>
        <Link to={`/${planet}/overview`}>Overview</Link>
        <Link to={`/${planet}/structure`}>Internal Structure</Link>
        <Link to={`/${planet}/geology`}>Surface Geology</Link>
      </div>
      <h1>{planetInfo?.name.toUpperCase()}</h1>
      <p>{planetInfo?.[view].content}</p>
      <p>
        Source{' '}
        <a
          href={planetInfo?.[view].source}
          target="_blank"
          rel="noreferrer noopener"
        >
          Wikipedia
        </a>
      </p>
      <dl>
        <dt>Rotation Time</dt>
        <dd>{planetInfo?.rotation}</dd>
        <dt>Revolution Time</dt>
        <dd>{planetInfo?.revolution}</dd>
        <dt>Radius</dt>
        <dd>{planetInfo?.radius}</dd>
        <dt>Average Temp.</dt>
        <dd>{planetInfo?.temperature}</dd>
      </dl>
    </>
  )
}

export { Planet }
