import { render, screen } from '@testing-library/react'

import CriarUsuario from '.'

describe('<CriarUsuario />', () => {
  it('should render the heading', () => {
    const { container } = render(<CriarUsuario />)

    expect(screen.getByRole('heading', { name: /CriarUsuario/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})