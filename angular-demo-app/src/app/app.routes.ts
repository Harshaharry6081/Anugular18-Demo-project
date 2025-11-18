import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  { 
    path: 'users', 
    loadComponent: () => import('./components/user-list/user-list.component').then(m => m.UserListComponent)
  },
  { 
    path: 'user/:id', 
    loadComponent: () => import('./components/user-detail/user-detail.component').then(m => m.UserDetailComponent)
  },
  { 
    path: 'weather', 
    loadComponent: () => import('./components/weather/weather.component').then(m => m.WeatherComponent)
  },
  { 
    path: 'todo', 
    loadComponent: () => import('./components/todo/todo.component').then(m => m.TodoComponent)
  },
  { path: '**', redirectTo: '/dashboard' }
];
