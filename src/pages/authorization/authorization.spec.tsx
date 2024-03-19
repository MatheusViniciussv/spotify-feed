import { render } from "@testing-library/react"
import { StyledLink } from "./styled"

describe('Authorization Access', () => {
  it('Should display the success button', () => {

    const isAuth = true

    const wrapper = render(
      <>
        {isAuth ? (
          <>
            <h1>Spotify Feed</h1>
            <p>Tudo pronto, agora pode ver seus artistas mais escutados.</p>

            <StyledLink variant='success' href='/feed' >
              Acessar
            </StyledLink>
          </>
        ) : (
          <>
            <h1>Spotify Feed</h1>
            <p>Algo deu errado, tente novamente mais tarde.</p>

            <StyledLink variant='error' href='/' >
              Voltar
            </StyledLink>
          </>
        )}
      </>
    )

    const statusText = wrapper.getByText('Acessar')

    expect(statusText).toBeInTheDocument()
  })

  it('Should display the button error', () => {

    const isAuth = false

    const wrapper = render(
      <>
        {isAuth ? (
          <>
            <h1>Spotify Feed</h1>
            <p>Tudo pronto, agora pode ver seus artistas mais escutados.</p>

            <StyledLink variant='success' href='/feed' >
              Acessar
            </StyledLink>
          </>
        ) : (
          <>
            <h1>Spotify Feed</h1>
            <p>Algo deu errado, tente novamente mais tarde.</p>

            <StyledLink variant='error' href='/' >
              Voltar
            </StyledLink>
          </>
        )}
      </>
    )

    const statusText = wrapper.getByText('Voltar')

    expect(statusText).toBeInTheDocument()
  })
})