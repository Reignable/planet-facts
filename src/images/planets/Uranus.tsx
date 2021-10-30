import { ReactComponent as Planet } from 'assets/planet-uranus.svg'
import { ReactComponent as Internal } from 'assets/planet-uranus-internal.svg'
import geology from 'assets/geology-uranus.png'

const Uranus = ({ internal = true }: { internal: boolean }): JSX.Element =>
  internal ? <Internal /> : <Planet />
Uranus.geology = geology
export { Uranus }
