import { ReactComponent as Planet } from 'assets/planet-earth.svg'
import { ReactComponent as Internal } from 'assets/planet-earth-internal.svg'
import geology from 'assets/geology-earth.png'

const Earth = ({ internal = true }: { internal: boolean }): JSX.Element =>
  internal ? <Internal /> : <Planet />
Earth.geology = geology
export { Earth }
