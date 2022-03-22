import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SideBarComponent} from "./side-bar/side-bar.component";
import {StoreViewComponent} from "./store-view/store-view.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterModule} from "@angular/router";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {CommonComponentsModule} from "../common-components/common-components.module";
import {MatCardModule} from "@angular/material/card";
import {UpdatesComponent} from './updates/updates.component';
import {CategoriesComponent} from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { ModShowcaseComponent } from './mod-showcase/mod-showcase.component';
import {MatRippleModule} from "@angular/material/core";


@NgModule({
  declarations: [
    SideBarComponent,
    StoreViewComponent,
    UpdatesComponent,
    CategoriesComponent,
    CategoryComponent,
    ModShowcaseComponent
  ],
  exports: [
    StoreViewComponent
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        MatSidenavModule,
        RouterModule,
        MatListModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        CommonComponentsModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatRippleModule,
    ]
})
export class StoreModule {
}
