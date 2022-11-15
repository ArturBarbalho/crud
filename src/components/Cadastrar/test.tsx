import { render, screen } from '@testing-library/react'

import Cadastrar from '.'

describe('<Cadastrar />', () => {
  it('should render the heading', () => {
    const { container } = render(<Cadastrar />)

    expect(screen.getByRole('heading', { name: /Cadastrar/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})