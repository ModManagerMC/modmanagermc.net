import { Component, OnInit } from "@angular/core";
import {UserService} from "../../common-components/user.service";
import {User} from "../../common-components/models/user";

@Component({
  selector: "store-view",
  templateUrl: "./store-view.component.html",
  styleUrls: ["./store-view.component.scss"]
})
export class StoreViewComponent implements OnInit {

  user!: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(value => {
      this.user = value
    })
  }
}
