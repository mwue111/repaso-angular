import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
//import { AppRoutingProviders, routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { HeroesComponent } from './component/heroes/heroes.component';
import {MatInputModule} from '@angular/material/input';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { MessagesComponent } from './component/messages/messages.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //routing,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [
    //AppRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
