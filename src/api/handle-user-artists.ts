import { api } from "../services/api";

 interface Artists {
  limit: number;
  items: Array<{
    id: string;
    images: Array<{
      url: string;
      height: number;
      width: number;
    }>;
    name: string;
    popularity: number;
    type: number;
    uri: string;
  }>
}



export async function handleUserTopArtists() {
  const token = localStorage.getItem("@spotify-feed-token")

  const response = await api.get<Artists>("/me/top/artists?limit=50", { headers: { Authorization: `Bearer ${token}` } });

  return response.data
}
