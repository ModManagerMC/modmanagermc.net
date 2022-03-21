import {Injectable} from "@angular/core";
import {Observable, of, tap} from "rxjs";
import {User} from "./models/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {

  user: User | undefined

  get token(): string | null {
    return localStorage.getItem("token");
  }

  set token(value: string | null) {
    if (typeof value === "string") {
      localStorage.setItem("token", value);
    }
  }

  constructor(private http: HttpClient) {
  }

  getUser(): Observable<User> {
    if (this.user) {
      return of(this.user)
    }
    return this.http.get<User>("https://api.modrinth.com/v2/user", {
      headers: {
        "Authorization": this.token!!,
      }
    }).pipe(tap(value => this.user = value))
  }

}
