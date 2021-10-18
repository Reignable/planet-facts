import { useMediaQuery } from 'react-responsive'

type Sizes = 'mobile' | 'tablet' | 'desktop'

const breakpoints: { [key in Sizes]: number } = {
  mobile: 375,
  tablet: 768,
  desktop: 1440,
}

const mq = {
  up(breakpoint: Sizes): string {
    return `(min-width: ${breakpoints[breakpoint]}px)`
  },
  down(breakpoint: Sizes): string {
    return `(max-width: ${breakpoints[breakpoint]}px)`
  },
}

export { mq, useMediaQuery }
