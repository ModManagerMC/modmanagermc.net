import { NgModule } from "@angular/core";
import { LoadingComponent } from "./loading/loading.component";
import {CommonModule} from "@angular/common";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {LoginComponent} from "./login/login.component";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import { CapitalizePipe } from './capitalize.pipe';



@NgModule({
  declarations: [
    LoadingComponent,
    LoginComponent,
    CapitalizePipe
  ],
  exports: [
    LoadingComponent,
    LoginComponent,
    CapitalizePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ]
})
export class CommonComponentsModule { }
