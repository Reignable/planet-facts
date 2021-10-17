import { Nav } from 'Nav'
import { BrowserRouter } from 'react-router-dom'
import { Redirect, Route } from 'react-router'
import { Planet } from 'Planet'

export const App = (): JSX.Element => (
  <BrowserRouter>
    <Nav />
    <Route path="/:planet" component={Planet} />
    <Redirect exact path="/" to="/earth" />
  </BrowserRouter>
)
