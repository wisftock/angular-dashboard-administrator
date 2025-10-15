import { Routes } from '@angular/router';
import { UserUi } from './modules/user/presentation/user-ui';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: UserUi,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
