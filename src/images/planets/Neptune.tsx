import { ReactComponent as Planet } from 'assets/planet-neptune.svg'
import { ReactComponent as Internal } from 'assets/planet-neptune-internal.svg'
import geology from 'assets/geology-neptune.png'

const Neptune = ({ internal = true }: { internal: boolean }): JSX.Element =>
  internal ? <Internal /> : <Planet />
Neptune.geology = geology
export { Neptune }
