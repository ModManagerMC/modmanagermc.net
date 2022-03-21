import { Component, OnInit } from '@angular/core';
import {Update} from "../models/update";

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {

  updates: Array<Update> = []
  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
