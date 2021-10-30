import { ReactComponent as Planet } from 'assets/planet-jupiter.svg'
import { ReactComponent as Internal } from 'assets/planet-jupiter-internal.svg'
import geology from 'assets/geology-jupiter.png'

const Jupiter = ({ internal = true }: { internal: boolean }): JSX.Element =>
  internal ? <Internal /> : <Planet />
Jupiter.geology = geology
export { Jupiter }
