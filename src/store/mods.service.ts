import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {SearchResult} from "./models/search-result";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ModsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getModsByCategory(category: string): Observable<SearchResult> {
    return this.http.get<SearchResult>("https://api.modrinth.com/v2/search?facets=[[\"categories:" + category + "\"]]")
  }

  getPreviewMods(category: string, limit: number, sorting: string): Observable<SearchResult> {
    return this.http.get<SearchResult>("https://api.modrinth.com/v2/search?limit=" + limit + "&index=" + sorting
      + "&facets=[[\"categories:" + category + "\"]]&filters=gallery!=\"\"")
  }

}
