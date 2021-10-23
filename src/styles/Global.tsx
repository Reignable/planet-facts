import { css, Global as EmGlobal } from '@emotion/react'
import background from 'assets/background-stars.svg'
import { reset } from './reset'
import { theme } from './theme'

function Global(): JSX.Element {
  return (
    <EmGlobal
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=Spartan:wght@500&display=swap');

        ${reset}

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body {
          background-color: ${theme.colors.background};
          background-image: url(${background});
          background-size: 100%;
          color: ${theme.colors.white};
        }
      `}
    />
  )
}

export { Global }
