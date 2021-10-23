import { useMediaQuery } from 'react-responsive'

type Sizes = 'mobile' | 'tablet' | 'desktop'

const breakpoints: { [key in Sizes]: number } = {
  mobile: 424,
  tablet: 767,
  desktop: 1439,
}

const mq = {
  up(breakpoint: Sizes): string {
    return `(min-width: ${breakpoints[breakpoint]}px)`
  },
  down(breakpoint: Sizes): string {
    return `(max-width: ${breakpoints[breakpoint] - 1}px)`
  },
  between(breakpointA: Sizes, breakpointB: Sizes): string {
    return `${this.up(breakpointA)} and ${this.down(breakpointB)}`
  },
}

export { mq, useMediaQuery }
