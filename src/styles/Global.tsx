import { css, Global as EmGlobal } from '@emotion/react'
import { reset } from './reset'

function Global() {
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
      `}
    />
  )
}

export { Global }
