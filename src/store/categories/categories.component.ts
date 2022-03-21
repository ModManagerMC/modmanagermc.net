import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../category.service";
import {Observable} from "rxjs";
import {Category} from "../models/category";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories!: Array<Category>
  columns!: Array<Array<Category>>
  loading: boolean = false;

  constructor(
    private categoryService: CategoryService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.loading = true
    this.categoryService.getModCategories().subscribe(value => {
      this.categories = value;
      this.columns = []
      let perColumn = Math.floor(this.categories.length / 3)
      for (let i = 0; i < 3; i++) {
        this.columns.push(this.categories.slice(i*perColumn, i*perColumn + perColumn))
      }
      this.loading = false;
    })
  }

  processSVG(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg)
  }
}
