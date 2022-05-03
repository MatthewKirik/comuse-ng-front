import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { SpacesComponent } from './spaces/spaces.component';
import { SpaceComponent } from './spaces/space/space.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SpacesComponent,
    SpaceComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
