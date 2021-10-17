import { useMediaQuery } from 'react-responsive'

type Sizes = 'mobile' | 'tablet' | 'desktop'

const breakpoints = [
  { name: 'mobile', size: 375 },
  { name: 'tablet', size: 768 },
  { name: 'desktop', size: 1440 },
]

const mq = breakpoints.reduce<{
  [key in Sizes]: string
}>(
  (mediaQueries, bp) => ({
    ...mediaQueries,
    [bp.name]: `@media (min-width: ${bp.size}px)`,
  }),
  { mobile: '', tablet: '', desktop: '' },
)

export { mq, useMediaQuery }
