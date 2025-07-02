import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'heroes', loadComponent: () => import('./heroes/heroes.component').then(m => m.HeroesComponent) },
  { path: 'detail/:id', loadComponent: () => import('./hero-detail/hero-detail.component').then(m => m.HeroDetailComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
