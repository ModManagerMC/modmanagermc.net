import {ModSearchInfo} from "./mod-search-info";

export class PreviewMods {

  constructor(
    public updated: ModSearchInfo,
    public downloaded: ModSearchInfo
  ) {
  }

}
