import { TagLabel as Tag } from './index.js'

export default {
  title: 'Tag',
  tags: ['autodocs'],
  component: Tag,
  argTypes: {
    label: {
      control: 'text',
    },
  },
}

export const Label = {
  args: {
    label: 'Hello',
    color: 'red',
  },
}
