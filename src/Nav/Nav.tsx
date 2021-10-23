import styled from '@emotion/styled'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useMediaQuery } from 'styles/media-queries'
import { theme } from 'styles/theme'
import { planets } from 'types'
import { ReactComponent as Chevron } from './icon-chevron.svg'
import { ReactComponent as Hamburger } from './icon-hamburger.svg'

const Header = styled.header`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (min-width: 425px) {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 35px;
    padding: 32px 51px 27px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: max-content max-content;
    justify-content: space-between;
    align-items: center;
    padding: 22px 32px 23px;
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

const ListItem = styled.li<{ color?: string; activeLink?: boolean }>`
  padding: 1.25rem 0;
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
  line-height: 25px;
  font-size: 15px;
  letter-spacing: 1.36364px;
  text-transform: uppercase;
  color: ${props => (props.activeLink ? theme.colors.white : '#c1c1c8')};
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  column-gap: 1.5rem;
  align-items: center;
  transition: color 150ms ease-in-out;
  text-decoration: none;

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

  @media (min-width: 1440px) {
    position: relative;
    cursor: pointer;
    &::before {
      position: absolute;
      display: block;
      content: '';
      width: 100%;
      height: 4px;
      top: -30px;
      background: transparent;
      transition: background-color 150ms ease-in-out;
    }

    &:hover {
      color: ${theme.colors.white};
      &::before {
        background-color: ${props => props.color};
      }
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
  const location = useLocation()

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
                  style={{ textDecoration: 'none' }}
                  key={planet}
                  to={`/${planet}/overview`}
                >
                  <ListItem
                    color={theme.colors[planet]}
                    activeLink={location.pathname.includes(planet)}
                  >
                    {planet.toUpperCase()}
                  </ListItem>
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
