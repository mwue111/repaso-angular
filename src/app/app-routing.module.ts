import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './component/heroes/heroes.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full'},
  { path: 'sobre-mi', component: AboutMeComponent },
  { path: 'dashboard-heroes', component: DashboardComponent },
  { path: 'heroe/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
