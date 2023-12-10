import { Routes } from '@angular/router';
import {MainTableComponent} from "./main-table/main-table.component";

export const routes: Routes = [
  { path: 'main-table', component: MainTableComponent },
  { path: '**', redirectTo: '/main-table' },
];
