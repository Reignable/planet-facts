import styled from '@emotion/styled'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'styles/media-queries'
import { theme } from 'styles/theme'
import { planets } from 'types'
import { ReactComponent as Hamburger } from './icon-hamburger.svg'
import { ReactComponent as Chevron } from './icon-chevron.svg'

const Header = styled.header`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (min-width: 425px) {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    justify-items: center;
    row-gap: 35px;
    padding: 32px 51px 27px;
  }
`

const H2 = styled.h2`
  font-family: 'Antonio', sans-serif;
  font-size: 28px;
  line-height: 40px;
  letter-spacing: -1.05px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${theme.colors.white};
`

const IconButton = styled.button<{ menuOpen?: boolean }>`
  padding: 0;
  height: min-content;
  background: none;
  border: none;
  color: ${props => (props.menuOpen ? theme.colors.grey : theme.colors.white)};
  transition: ${theme.transitions.create(['color'])};
`

const List = styled.ul`
  padding: 1.5rem;

  @media (min-width: 425px) {
    display: flex;
    column-gap: 30px;
    padding: 0;
  }
`

const ListItem = styled.li<{ color?: string }>`
  padding: 1.25rem 0;
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
  line-height: 25px;
  font-size: 15px;
  letter-spacing: 1.36364px;
  text-transform: uppercase;
  color: ${theme.colors.white};
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  column-gap: 1.5rem;
  align-items: center;

  & + & {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  & svg {
    margin-right: 0.5rem;
  }

  @media (min-width: 425px) {
    display: revert;
    font-size: 11px;
    letter-spacing: 1px;
    padding-block: 0;
    & + & {
      border: none;
    }
  }
`

const ColorCircle = styled.div<{ color?: string }>`
  width: 20px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: ${props => props.color};
`

const Nav = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 425 })

  const handleMenuButtonClick = () => {
    setMenuOpen(c => !c)
  }

  return (
    <>
      <Header>
        <H2>the planets</H2>
        {isMobile ? (
          <IconButton
            type="button"
            onClick={handleMenuButtonClick}
            menuOpen={menuOpen}
          >
            <Hamburger />
          </IconButton>
        ) : (
          <nav>
            <List>
              {planets.map(planet => (
                <Link
                  component={ListItem}
                  role="link"
                  to={`/${planet}/overview`}
                  key={planet}
                >
                  {planet.toUpperCase()}
                </Link>
              ))}
            </List>
          </nav>
        )}
      </Header>
      {menuOpen && isMobile && (
        <nav>
          <List>
            {planets.map(planet => (
              <Link
                component={ListItem}
                role="link"
                to={`/${planet}/overview`}
                key={planet}
              >
                <ColorCircle color={theme.colors[planet]} />
                {planet.toUpperCase()}
                <Chevron />
              </Link>
            ))}
          </List>
        </nav>
      )}
    </>
  )
}

export { Nav }
