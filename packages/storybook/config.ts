import type { StorybookConfig } from '@storybook/sveltekit'
import type { Preview } from '@storybook/svelte'

export const defaults: Omit<StorybookConfig, 'stories'> = {
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-svelte-csf',
  ],
  framework: {
    name: '@storybook/sveltekit',
    options: {},
  },
}

export { Preview, StorybookConfig }
