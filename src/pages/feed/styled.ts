import { Grid } from '@progress/kendo-react-grid';
import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledGrid = styled(Grid)`
  background: #d81052;
  & th {
    color: grey;
    font-weight: bold;
  }
  & td:nth-child(1) {
    font-weight: bold;
  }
`;

export const ArtistsCellTd = styled.td`
  display: flex;
  align-items: center;
  line-height: 0;
`;