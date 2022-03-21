import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {StoreViewComponent} from "../store/store-view/store-view.component";
import {AuthenticationGuard} from "../common-components/authentication.guard";
import {LoginComponent} from "../common-components/login/login.component";
import {UpdatesComponent} from "../store/updates/updates.component";
import {CategoriesComponent} from "../store/categories/categories.component";
import {CategoryComponent} from "../store/category/category.component";

const routes: Routes = [
  {
    path: "store",
    component: StoreViewComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: "updates",
        component: UpdatesComponent,
      },
      {
        path: "categories",
        component: CategoriesComponent,
      },
      {
        path: "category/:id",
        component: CategoryComponent
      }
    ]
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "**",
    redirectTo: "store",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
