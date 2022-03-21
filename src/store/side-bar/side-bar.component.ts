import {Component, Input} from "@angular/core";
import {User} from "../../common-components/models/user";

@Component({
  selector: "store-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"]
})
export class SideBarComponent {

  @Input() user!: User

}
