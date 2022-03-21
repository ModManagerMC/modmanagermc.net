import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../common-components/user.service";
import {Category} from "./models/category";
import {Observable, tap, of, filter, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Array<Category> = []

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {
  }

  getCategories(): Observable<Array<Category>> {
    if (this.categories.length != 0) {
      return of(this.categories)
    }
    return this.http.get<Array<Category>>("https://api.modrinth.com/v2/tag/category", {
      headers: {
        "Authorization": this.userService.token!!
      }
    }).pipe(tap(value => this.categories = value))
  }

  getModCategories(): Observable<Array<Category>> {
    return this.getCategories().pipe(
      map(categories => categories.filter(category => category.project_type === "mod"))
    )
  }

}
