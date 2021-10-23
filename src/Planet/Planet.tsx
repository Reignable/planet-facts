import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Planet as PlanetType, PlanetInfo } from 'types'
import { Earth as Image } from 'images/Earth'

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
      <Image />
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
        <div>
          <dt>Rotation Time</dt>
          <dd>{planetInfo?.rotation}</dd>
        </div>
        <div>
          <dt>Revolution Time</dt>
          <dd>{planetInfo?.revolution}</dd>
        </div>
        <div>
          <dt>Radius</dt>
          <dd>{planetInfo?.radius}</dd>
        </div>
        <div>
          <dt>Average Temp.</dt>
          <dd>{planetInfo?.temperature}</dd>
        </div>
      </dl>
    </>
  )
}

export { Planet }
