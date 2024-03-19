import { GridCustomCellProps } from "@progress/kendo-react-grid";

import { Rating } from "@progress/kendo-react-inputs";
import { Avatar } from "@progress/kendo-react-layout";
import { ArtistsCellTd } from "./styled";

export const ArtistsName = (props: GridCustomCellProps) => {
  const { dataItem } = props;

  return (
    <ArtistsCellTd {...props.tdProps}>
      <Avatar rounded="full" type="image" style={{ marginRight: 3 }}>
        <img src={dataItem?.images[2].url} />
      </Avatar>
      <a
        href={dataItem.external_urls.spotify}
        target="_blank"
        style={{
          display: "inlineBlock",
          paddingLeft: "10px",
          verticalAlign: "middle",
          lineHeight: "32px",
        }}
      >
        {dataItem?.name}
      </a>
    </ArtistsCellTd>
  );
};

export const ArtistsPopularity = (props: GridCustomCellProps) => {
  return (
    <td {...props.tdProps}>
      <Rating
        value={props.dataItem.popularity * 5 / 100}
        readonly={true}
      />{" "}
    </td>
  );
};
