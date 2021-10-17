import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { Planet as PlanetType, PlanetInfo } from 'types'

const Planet = (): JSX.Element => {
  const { planet } = useParams<{ planet: PlanetType }>()

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
        <button type="button">Overview</button>
        <button type="button">Internal Structure</button>
        <button type="button">Surface Geology</button>
      </div>
      <h1>{planetInfo?.name.toUpperCase()}</h1>
      <p>{planetInfo?.overview.content}</p>
      <p>
        Source{' '}
        <a
          href={planetInfo?.overview.source}
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
