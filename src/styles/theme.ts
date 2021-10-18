const theme = {
  colors: {
    grey: '#979797',
    white: '#fff',
  },
  transitions: {
    duration: '150ms',
    easing: 'ease-in-out',
    create(properties: string[]): string {
      return properties
        .map((property) => `${property} ${this.duration} ${this.easing}`)
        .join(`,`)
    },
  },
}

export { theme }
