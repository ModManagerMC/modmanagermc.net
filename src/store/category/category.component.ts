import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ModsService} from "../mods.service";
import {SearchResult} from "../models/search-result";
import {ModSearchInfo} from "../models/mod-search-info";
import {firstValueFrom, Observable, of} from "rxjs";
import {PreviewMods} from "../models/preview-mods";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category!: string
  previewMods!: PreviewMods
  searchResult!: SearchResult
  loading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modsService: ModsService
  ) {
    this.route.params.subscribe((params: Params) => {
      this.category = params["id"];
    });
  }

  ngOnInit(): void {
    this.loading = true
    this.load().then()
  }

  async load() {
    this.searchResult = await firstValueFrom(this.modsService.getModsByCategory(this.category))
    let topUpdated = (await firstValueFrom(this.modsService.getPreviewMods(this.category, 1, "updated"))).hits[0]
    let topDownloaded = (await firstValueFrom(this.modsService.getPreviewMods(this.category, 1, "downloads"))).hits[0]

    for (let i = 0; i < topUpdated.gallery.length; i++) {
      let url = topUpdated.gallery[i]
      if (url.startsWith("https")) {
        continue
      }
      topUpdated.gallery[i] = "https://cdn.modrinth.com/" + url
    }
    for (let i = 0; i < topDownloaded.gallery.length; i++) {
      let url = topDownloaded.gallery[i]
      if (url.startsWith("https")) {
        continue
      }
      topDownloaded.gallery[i] = "https://cdn.modrinth.com/" + url
    }

    this.previewMods = new PreviewMods(topUpdated, topDownloaded)
    console.log(this.previewMods);
    this.loading = false;
  }

  goBack() {
    this.router.navigate(["/store/categories"]).then();
  }


}
