import { ReactComponent as Planet } from 'assets/planet-mercury.svg'
import { ReactComponent as Internal } from 'assets/planet-mercury-internal.svg'
import geology from 'assets/geology-mercury.png'

const Mercury = ({ internal = true }: { internal: boolean }): JSX.Element =>
  internal ? <Internal /> : <Planet />
Mercury.geology = geology
export { Mercury }
