import { Story, Meta } from '@storybook/react/types-6-0'
import CriarUsuario from '.'

export default {
  title: 'CriarUsuario',
  component: CriarUsuario
} as Meta

export const Default: Story = () => <CriarUsuario />