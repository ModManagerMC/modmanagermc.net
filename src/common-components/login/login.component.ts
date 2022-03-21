import { Component, OnInit } from "@angular/core";
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  token!: string | null
  origin!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.origin = this.route.snapshot.queryParams["origin"] || "/";
    this.token = this.userService.token
  }

  login() {
    this.userService.token = this.token;
    this.userService.getUser().subscribe(() => {
      this.router.navigate([this.origin]).then();
    })
  }
}
