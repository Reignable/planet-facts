import { Global } from '../src/styles/Global'
import { initializeWorker, mswDecorator } from 'msw-storybook-addon'
import { handlers } from '../src/mocks/handlers'

initializeWorker()

export const parameters = {
  msw: handlers,
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'light', value: '#F8F8F8' },
      { name: 'dark', value: '#070724' },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: [
      {
        name: 'mobile',
        styles: { width: '375px', height: '950px' },
        type: 'mobile',
      },
      {
        name: 'tablet',
        styles: { width: '768px', height: '1024px' },
        type: 'tablet',
      },
      {
        name: 'desktop',
        styles: { width: '1440px', height: '1024px' },
        type: 'desktop',
      },
    ],
    defaultViewport: 'mobile',
  },
}

export const decorators = [
  mswDecorator,
  Story => (
    <>
      <Global />
      <Story />
    </>
  ),
]
