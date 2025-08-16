import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
	{ path: 'login', loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent) },
	{
		path: '',
		canMatch: [authGuard],
		children: [
			{ path: '', pathMatch: 'full', redirectTo: 'dashboard' },
			{ path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) }
		]
	},
	{ path: '**', redirectTo: '' }
];