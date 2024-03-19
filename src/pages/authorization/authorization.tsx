

import { useLayoutEffect, useState } from 'react'
import { auth } from '../../services/auth'
import { Container, Content, StyledLink } from './styled'
import { useSearchParams } from 'react-router-dom'

export function Authorization() {

  const [isAuth, setIsAuth] = useState<boolean>(() => {
    const storedToken = localStorage.getItem('@spotify-feed-token');
    return storedToken ? true : false;
  });

  const [params,] = useSearchParams()

  async function RequestAccessToken() {
    const response = await auth.post('/api/token', { grant_type: "authorization_code", code: params.get('code'), redirect_uri: 'http://localhost:5173/authorization' })

    localStorage.setItem('@spotify-feed-token', response.data.access_token)
    localStorage.setItem('@spotify-feed-refresh_token', response.data.refresh_token)

    if (response.status === 200) {
      setIsAuth(true)
      return
    }
  }

  useLayoutEffect(() => {
    RequestAccessToken()
  }, [])

  return (
    <Container>
      <Content>
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
      </Content>
    </Container>
  )
}