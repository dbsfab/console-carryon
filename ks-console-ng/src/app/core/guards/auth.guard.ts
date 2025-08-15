import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanMatchFn = () => {
	const auth = inject(AuthService);
	return auth.isAuthenticated() ? true : inject(Router).createUrlTree(['/login']);
};