import { Routes } from '@angular/router';
import { MainTableComponent } from './main-table/main-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: MainTableComponent },
    { path: '**', component: PageNotFoundComponent }
];
