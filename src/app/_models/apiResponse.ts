import { Movie } from "./movie";

export interface ApiResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}
