import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Planet as PlanetType, PlanetInfo } from 'types'
import { Earth as Image } from 'images/Earth'
import styled from '@emotion/styled'
import { theme } from 'styles/theme'
import { ReactComponent as SourceIcon } from './icon-source.svg'

const Content = styled.div`
  padding: 0 24px 24px;
`

const Links = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-around;
  & a {
    font-size: 9px;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1.93px;
    padding: 20px 0 16px;
    &.active {
      color: ${theme.colors.white};
      border-bottom: 4px solid ${props => props.color};
    }
  }
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 26px;
`

const H2 = styled.h2`
  font-family: 'Antonio', sans-serif;
  font-size: 40px;
  line-height: 58px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${theme.colors.white};
  text-align: center;
`

const P = styled.p`
  font-family: 'Spartan', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 22px;
  text-align: center;
`

const Source = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5ch;
  & a {
    color: inherit;
    font-weight: 700;
  }
`

const Data = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  & dt {
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.73px;
    text-transform: uppercase;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.5);
  }

  & dd {
    font-family: Antonio, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 29px;

    text-align: right;
    letter-spacing: -0.75px;
    text-transform: uppercase;
  }
`

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
      <Links color={theme.colors[planet]}>
        <NavLink activeClassName="active" to={`/${planet}/overview`}>
          Overview
        </NavLink>
        <NavLink activeClassName="active" to={`/${planet}/structure`}>
          Structure
        </NavLink>
        <NavLink activeClassName="active" to={`/${planet}/geology`}>
          Surface
        </NavLink>
      </Links>
      <Content>
        <Image style={{ padding: '64px' }} />
        <Text>
          <H2>{planetInfo?.name.toUpperCase()}</H2>
          <P>{planetInfo?.[view].content}</P>
          <Source>
            Source :
            <a
              href={planetInfo?.[view].source}
              target="_blank"
              rel="noreferrer noopener"
            >
              Wikipedia
            </a>
            <SourceIcon />
          </Source>
        </Text>
        <Data>
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
        </Data>
      </Content>
    </>
  )
}

export { Planet }
