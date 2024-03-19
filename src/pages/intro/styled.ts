import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    color: #eeeeee;
  }

  p {
    color: #eeeeee;
  }
`;

export const StyledLink = styled(Link)`
  margin-top: 1rem;
  padding: 0.75rem 1.2rem;

  text-decoration: none;
  color: #eeeeee;

  background: #393e46;
  border: 0;
  border-radius: 8px;
`;