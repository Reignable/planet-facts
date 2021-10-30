import { Planet } from 'types'
import * as PlanetImages from './planets'

type ImageProps = {
  planet: Planet
  type?: 'overview' | 'structure' | 'geology'
}

const Image = ({ planet, type = 'overview' }: ImageProps): JSX.Element => {
  const PlanetImage = PlanetImages[planet]
  return (
    <>
      <PlanetImage internal={type === 'structure'} />
      {type === 'geology' && (
        <img src={PlanetImage.geology} alt={`${planet}'s surface'`} />
      )}
    </>
  )
}
Image.defaultProps = {
  type: 'overview',
}

export { Image }
