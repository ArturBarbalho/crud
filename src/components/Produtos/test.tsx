import { render, screen } from '@testing-library/react'

import Produtos from '.'

describe('<Produtos />', () => {
  it('should render the heading', () => {
    const { container } = render(<Produtos />)

    expect(screen.getByRole('heading', { name: /Produtos/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})