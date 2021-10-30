import { Meta } from '@storybook/react'
import { Image as ImageComponent } from './Image'

export default {
  title: 'Image',
  Component: ImageComponent,
  argTypes: {
    planet: {
      defaultValue: 'earth',
      control: { type: 'select' },
      options: [
        'mercury',
        'venus',
        'earth',
        'mars',
        'jupiter',
        'saturn',
        'uranus',
        'neptune',
      ],
    },
  },
} as Meta

export const Image = (args: any): JSX.Element => <ImageComponent {...args} />
Image.args = {
  planet: 'earth',
  type: 'internal',
}
