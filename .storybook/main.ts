import { defaults, type StorybookConfig } from '../packages/storybook/config'

const config: StorybookConfig = {
  ...defaults,
  stories: [`../src/**/?(*.)stories?(.*).@(svelte|ts|tsx)`],
}

export default config
