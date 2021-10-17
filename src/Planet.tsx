import { useParams } from 'react-router'

const Planet = (): JSX.Element => {
  const { planet } = useParams<{ planet: string }>()
  return <>{planet}</>
}

export { Planet }
