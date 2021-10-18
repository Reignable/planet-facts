import styled from '@emotion/styled'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { theme } from 'styles/theme'
import { planets } from 'types'
import { ReactComponent as HamburgerIcon } from './icon-hamburger.svg'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px 12px;
  border-bottom: 1px solid ${theme.colors.grey};
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
  background: none;
  border: none;
  color: ${(props) =>
    props.menuOpen ? theme.colors.grey : theme.colors.white};
  transition: ${theme.transitions.create(['color', 'box-shadow'])};
  &:hover {
    box-shadow: 0 0 0 1px currentColor;
  }
`

const Nav = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuButtonClick = () => {
    setMenuOpen((c) => !c)
  }

  return (
    <>
      <Header>
        <H2>the planets</H2>
        <IconButton
          type="button"
          onClick={handleMenuButtonClick}
          menuOpen={menuOpen}
        >
          <HamburgerIcon />
        </IconButton>
      </Header>
      {menuOpen && (
        <nav>
          <ul>
            {planets.map((planet) => (
              <li>
                <Link key={planet} to={`/${planet}/overview`}>
                  {planet.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}

export { Nav }
