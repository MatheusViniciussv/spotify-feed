

import { env } from '../../services/env'
import { Container, Content, StyledLink } from './styled'

export function Intro() {
  return (
    <Container>
      <Content>
        <h1>Spotify Feed</h1>
        <p>Veja os artistas mais escutados por você no spotify.</p>

        <StyledLink to={`https://accounts.spotify.com/authorize?client_id=${env.VITE_CLIENT}&redirect_uri=http://localhost:5173/authorization&response_type=code&scope=user-top-read&%20user-read-private&%20user-read-email`} >
          Entrar
        </StyledLink>
      </Content>
    </Container>
  )
}