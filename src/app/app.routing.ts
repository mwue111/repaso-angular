import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { HeroesComponent } from './component/heroes/heroes.component';

const appRoutes: Routes = [
  { path: 'sobre-mi', component: AboutMeComponent },
  { path: 'tutorial-angular', component: HeroesComponent }
];

export const AppRoutingProviders: any[] = []; //servicio: para manejar datos
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
