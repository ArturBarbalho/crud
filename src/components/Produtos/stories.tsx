import { Story, Meta } from '@storybook/react/types-6-0'
import Produtos from '.'

export default {
  title: 'Produtos',
  component: Produtos
} as Meta

export const Default: Story = () => <Produtos />