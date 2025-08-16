import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
	private readonly tokenSignal = signal<string | null>(null);
	token() { return this.tokenSignal(); }
	setToken(token: string | null) { this.tokenSignal.set(token); }
	isAuthenticated() { return !!this.tokenSignal(); }
}