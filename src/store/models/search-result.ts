import {ModSearchInfo} from "./mod-search-info";

export interface SearchResult {
  hits: Array<ModSearchInfo>
  offset: number
  limit: number
  total_hits: number
}
