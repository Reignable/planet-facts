import { DefaultRequestBody, rest } from 'msw'
import { Planet, PlanetInfo, planets } from 'types'
import { planetsInfo } from './fixtures'

function isPlanet(planet: string): planet is Planet {
  return planets.includes(planet as Planet)
}

const handlers = [
  rest.get<
    DefaultRequestBody,
    PlanetInfo | { message: string },
    { planet: string }
  >(`http://localhost:8000/:planet`, (req, res, ctx) => {
    const { planet } = req.params
    if (!isPlanet(planet)) {
      return res(
        ctx.status(400),
        ctx.json({ message: 'planet param must be a real planet' }),
      )
    }
    const planetInfo = planetsInfo.find((p) => p.name === planet)
    if (!planetInfo)
      return res(
        ctx.status(404),
        ctx.json({ message: `Could not find info for ${planet}` }),
      )
    return res(ctx.status(200), ctx.json(planetInfo))
  }),
]

export { handlers }
