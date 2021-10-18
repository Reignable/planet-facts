const theme = {
  colors: {
    grey: '#979797',
    white: '#fff',
    mercury: '#def4fc',
    venus: '#f7cc7f',
    earth: '#545bfe',
    mars: '#ff6a45',
    jupiter: '#ecad7a',
    saturn: '#fccb6b',
    uranus: '#65f0d5',
    neptune: '#497efa',
  },
  transitions: {
    duration: '150ms',
    easing: 'ease-in-out',
    create(properties: string[]): string {
      return properties
        .map(property => `${property} ${this.duration} ${this.easing}`)
        .join(`,`)
    },
  },
}

export { theme }
