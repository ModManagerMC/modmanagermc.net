import {Component, Input} from '@angular/core';
import {ModSearchInfo} from "../models/mod-search-info";

@Component({
  selector: 'app-mod-showcase',
  templateUrl: './mod-showcase.component.html',
  styleUrls: ['./mod-showcase.component.scss']
})
export class ModShowcaseComponent {

  @Input() mod!: ModSearchInfo
  @Input() top: boolean = true
  @Input() description!: string;

  constructor() { }

}
