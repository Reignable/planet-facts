import { ReactComponent as Planet } from 'assets/planet-mars.svg'
import { ReactComponent as Internal } from 'assets/planet-mars-internal.svg'
import geology from 'assets/geology-mars.png'

const Mars = ({ internal = true }: { internal: boolean }): JSX.Element =>
  internal ? <Internal /> : <Planet />
Mars.geology = geology
export { Mars }
