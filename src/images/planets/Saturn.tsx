import { ReactComponent as Planet } from 'assets/planet-saturn.svg'
import { ReactComponent as Internal } from 'assets/planet-saturn-internal.svg'
import geology from 'assets/geology-saturn.png'

const Saturn = ({ internal = true }: { internal: boolean }): JSX.Element =>
  internal ? <Internal /> : <Planet />
Saturn.geology = geology
export { Saturn }
