import { useState } from 'react';

import { GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { Container, StyledGrid } from './styled';

import { useQuery } from '@tanstack/react-query'
import { handleUserTopArtists } from '../../api/handle-user-artists';
import { ArtistsName, ArtistsPopularity } from './artists-cells';

import { Input } from "@progress/kendo-react-inputs";
import { filterBy } from "@progress/kendo-data-query";

interface Artists {
  name: string
  popularity: number
}

interface PageState {
  skip: number;
  take: number;
}

export function Feed() {

  const { data: UserArtists } = useQuery({
    queryKey: ['user-artists'],
    queryFn: handleUserTopArtists,
  })

  const initialDataState: PageState = { skip: 0, take: 10 };

  const [data, setData] = useState<Artists[] | undefined>(UserArtists?.items);
  const [page, setPage] = useState<PageState>(initialDataState);
  const [pageSizeValue, setPageSizeValue] = useState();


  const filterData = (e: any) => {
    const value = e.target.value;
    setData(filterBy(UserArtists?.items || [], {
      logic: "or",
      filters: [
        { field: "name", operator: "contains", value: value },
        { field: "popularity", operator: "contains", value: value },
      ]
    }));
  };

  const pageChange = (event: any) => {
    const targetEvent = event.targetEvent;
    const take = targetEvent.value === "All" ? UserArtists?.limit : event.page.take;

    if (targetEvent.value) {
      setPageSizeValue(targetEvent.value);
    }

    setPage({
      ...event.page,
      take
    });
  };

  return (
    <Container>
      <StyledGrid
        data={data ? data.slice(page.skip, page.take + page.skip) : UserArtists?.items?.slice(page.skip, page.take + page.skip)}
        skip={page.skip}
        take={page.take}
        total={UserArtists?.limit}
        pageable={{
          buttonCount: 4,
          pageSizes: [5, 10, 15, "All"],
          pageSizeValue: pageSizeValue,
        }}
        onPageChange={pageChange}
        style={{ height: "800px", backgroundColor: '#393E46' }}
      >
        <GridToolbar size='large' >
          <h4>Filtrar: </h4>
          <Input placeholder='Procure pelo seu artista' style={{ width: '20rem' }} onChange={filterData} />
        </GridToolbar>
        <GridColumn title='Nome' field='name' cells={{ data: ArtistsName }} />
        <GridColumn title='Popularidade (1 -100)' field='popularity' cells={{ data: ArtistsPopularity }} />
      </StyledGrid>
    </Container>
  )
}