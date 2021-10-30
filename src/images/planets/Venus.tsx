import { ReactComponent as Planet } from 'assets/planet-venus.svg'
import { ReactComponent as Internal } from 'assets/planet-venus-internal.svg'
import geology from 'assets/geology-venus.png'

const Venus = ({ internal = true }: { internal: boolean }): JSX.Element =>
  internal ? <Internal /> : <Planet />
Venus.geology = geology
export { Venus }
