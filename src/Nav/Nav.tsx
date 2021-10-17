import styled from '@emotion/styled'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { planets } from 'types'
import { ReactComponent as HamburgerIcon } from './icon-hamburger.svg'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px 12px;
  border-bottom: 1px solid #979797;
`

const H2 = styled.h2`
  font-family: 'Antonio', sans-serif;
  font-size: 28px;
  line-height: 40px;
  letter-spacing: -1.05px;
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;
`

const IconButton = styled.button<{ menuOpen?: boolean }>`
  background: none;
  border: none;
  color: ${(props) => (props.menuOpen ? '#979797' : '#fff')};
  transition: color 150ms ease-in-out;
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
