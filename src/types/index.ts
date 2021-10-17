export const planets = [
  'mercury',
  'venus',
  'earth',
  'mars',
  'jupiter',
  'saturn',
  'uranus',
  'neptune',
] as const

export type Planet = typeof planets[number]

type GeneralInfo = { content: string; source: string }

export type PlanetInfo = {
  name: Planet
  overview: GeneralInfo
  structure: GeneralInfo
  geology: GeneralInfo
  rotation: string
  revolution: string
  radius: string
  temperature: string
  images: {
    planet: string
    internal: string
    geology: string
  }
}
