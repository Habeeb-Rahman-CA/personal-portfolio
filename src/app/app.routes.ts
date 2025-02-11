import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { WorksComponent } from './components/pages/works/works.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'works', component: WorksComponent }
];
