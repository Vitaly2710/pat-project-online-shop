import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import {CommonModule} from "@angular/common";
import { ButtonComponent } from './shared/components/button/button.component';
import {MatIconModule} from '@angular/material/icon'
import {ReactiveFormsModule} from "@angular/forms";
import { MainSliderComponent } from './shared/components/main-slider/main-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LogoComponent,
    ButtonComponent,
    MainSliderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
